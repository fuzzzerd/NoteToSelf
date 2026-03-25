---
title: "Archiving My Stack Overflow Contributions"
date: 2026-03-17
author:
  name: Nate Bross
tags:
  - stack-overflow
description: "Why and how I archived my Stack Overflow answers and questions to my own site."
---

Over the years I've answered questions on Stack Overflow, asked a few of my own, and generally tried to make the internet a little better, and useful one post at a time. Across the network sites I contributed to the most regularly, I helped over 6,000,000 people based on my questions and questions where I shared a highly upvoted answer. I wanted to bring that content home, alongside the rest of my content on this site.

## Why

Stack Overflow gave developers a lot, it came to the internet in a time when searching for expert answers to technical programming problems was a not an insignificant effort, and was a difficult part of being a developer. Stack Overflow was fast, reduced signal to noise ratio, and got straight to the point. The situation was so bad, that there [is an XKCD comic about the subject.](https://xkcd.com/979/)

Times change, and while Stack Overflow has a lot of great content, [it](https://meta.stackexchange.com/q/401324) [is](https://meta.stackexchange.com/q/390106) [no](https://meta.stackoverflow.com/q/438369/86860) longer the community I joined [over sixteen years ago](https://stackoverflow.com/help/badges/13/yearling?userid=86860). I wish them well, and hope they can align with the community. Its clear by the way the organization is being run that the community feedback that made the site what it is, is no longer a priority. I want to ensure that my contributions remain available, to myself and others, for as long as I maintain an internet presence.

## How

I used Claude Code to generate a throwaway TypeScript script that hits the [Stack Exchange API](https://api.stackexchange.com/2.3), fetches all my answers and questions, and converts them to Markdown files for this site. The script paginates through the API, converts HTML to Markdown with [Turndown](https://github.com/mixmark-io/turndown), and drops each post into a folder.

Accepted answers become blog posts, since at least someone found them useful, while my questions with a score of 10+ become blog posts. Everything else goes to an archive folder. The script works with any Stack Exchange site — just pass the site key and your user ID.

### Running it

Install turndown temporarily (it won't be saved to `package.json`):

```bash
npm install --no-save turndown @types/turndown
```

Run the script, passing your user ID and site:

```bash
SO_USER_ID=12345 SO_SITE=stackoverflow SO_API_KEY=your_key npx tsx so-backup.ts
```

Available sites: `stackoverflow`, `serverfault`, `superuser`, `gamedev`, `dba` (add more in the `SITE_MAP`). User IDs are per-site — your SO ID won't work on Server Fault.

You can register for a free API key at [stackapps.com/apps/oauth/register](https://stackapps.com/apps/oauth/register) to get 10,000 requests/day instead of the default 300.

Clean up after:

```bash
npm uninstall turndown @types/turndown
rm so-backup.ts
```

### The script

```typescript
import TurndownService from 'turndown';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SO_API = 'https://api.stackexchange.com/2.3';
const USER_ID = Number(process.env.SO_USER_ID ?? '0');
const SITE_KEY = process.env.SO_SITE ?? 'stackoverflow';
const PAGE_SIZE = Number(process.env.PAGE_SIZE ?? '100');
const BLOG_MIN_SCORE = 10;
const BLOG_DIR = 'src/content/blog';
const ARCHIVE_DIR = 'src/content/stackarchive';
const API_KEY = process.env.SO_API_KEY ?? '';

interface SiteConfig { key: string; name: string; url: string; }

const SITE_MAP: Record<string, SiteConfig> = {
  stackoverflow: { key: 'stackoverflow', name: 'Stack Overflow', url: 'https://stackoverflow.com' },
  serverfault: { key: 'serverfault', name: 'Server Fault', url: 'https://serverfault.com' },
  superuser: { key: 'superuser', name: 'Super User', url: 'https://superuser.com' },
  gamedev: { key: 'gamedev', name: 'Game Development', url: 'https://gamedev.stackexchange.com' },
  dba: { key: 'dba', name: 'Database Administrators', url: 'https://dba.stackexchange.com' },
};

function apiParams(): string { return API_KEY ? `&key=${API_KEY}` : ''; }
function delay(ms = 500): Promise<void> { return new Promise((r) => setTimeout(r, ms)); }

interface SOPost {
  answer_id?: number; question_id?: number; body: string; score: number;
  creation_date: number; owner: { user_id: number; display_name: string };
  tags?: string[]; title?: string; is_accepted?: boolean; accepted_answer_id?: number;
}
interface SOComment {
  comment_id: number; body: string; score: number;
  owner: { user_id: number; display_name: string };
}

const turndown = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced', fence: '```' });
turndown.addRule('fencedCodeBlock', {
  filter: (node) => node.nodeName === 'PRE' && !!node.querySelector('code'),
  replacement: (_content, node) => {
    const code = (node as HTMLElement).querySelector('code')!;
    const className = code.getAttribute('class') || '';
    const langMatch = className.match(/language-(\w+)/) || className.match(/lang-(\w+)/);
    const lang = langMatch ? langMatch[1] : '';
    return `\n\n\`\`\`${lang}\n${code.textContent || ''}\n\`\`\`\n\n`;
  },
});

async function fetchJson<T>(url: string, retries = 3): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url);
    const data = await res.json();
    if (data.backoff) {
      console.warn(`  Backoff: ${data.backoff}s`);
      await new Promise((r) => setTimeout(r, data.backoff * 1000));
    }
    if (data.error_id === 502 || res.status === 429) {
      const wait = (data.backoff || 10) * attempt;
      console.warn(`  Rate limited, waiting ${wait}s...`);
      await new Promise((r) => setTimeout(r, wait * 1000));
      continue;
    }
    if (data.error_id) throw new Error(`API error: ${data.error_name} - ${data.error_message}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
    return data;
  }
  throw new Error(`Failed after ${retries} retries: ${url}`);
}

async function fetchAnswers(userId: number, site: string, page = 1) {
  await delay();
  return fetchJson<{ items: SOPost[]; has_more: boolean }>(
    `${SO_API}/users/${userId}/answers?order=desc&sort=votes&site=${site}&filter=withbody&pagesize=${PAGE_SIZE}&page=${page}${apiParams()}`);
}
async function fetchQuestions(userId: number, site: string, page = 1) {
  await delay();
  return fetchJson<{ items: SOPost[]; has_more: boolean }>(
    `${SO_API}/users/${userId}/questions?order=desc&sort=votes&site=${site}&filter=withbody&pagesize=${PAGE_SIZE}&page=${page}${apiParams()}`);
}
async function fetchQuestion(qid: number, site: string) {
  await delay();
  return (await fetchJson<{ items: SOPost[] }>(`${SO_API}/questions/${qid}?site=${site}&filter=withbody${apiParams()}`)).items[0];
}
async function fetchAcceptedAnswer(aid: number, site: string) {
  await delay();
  return (await fetchJson<{ items: SOPost[] }>(`${SO_API}/answers/${aid}?site=${site}&filter=withbody${apiParams()}`)).items[0] ?? null;
}
async function fetchComments(postId: number, userId: number, type: 'answers' | 'questions', site: string) {
  await delay();
  const data = await fetchJson<{ items: SOComment[] }>(
    `${SO_API}/${type}/${postId}/comments?site=${site}&order=desc&sort=creation&filter=withbody${apiParams()}`);
  return data.items.filter((c) => c.score >= 3 || c.owner.user_id === userId);
}

function toSlug(title: string): string {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  if (slug.length <= 60) return slug;
  const t = slug.slice(0, 60); const d = t.lastIndexOf('-');
  return d > 20 ? t.slice(0, d) : t;
}
function formatDate(epoch: number) {
  const iso = new Date(epoch * 1000).toISOString().split('T')[0];
  return { year: iso.slice(0, 4), dateStr: iso };
}
function escapeYaml(s: string): string {
  return /[:"'\[\]{}#&*!|>%@`]/.test(s) || s.includes('\n')
    ? `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"` : `"${s}"`;
}
function writePost(filePath: string, content: string) {
  const dir = join(filePath, '..');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, 'utf-8');
  console.log(`  Written: ${filePath}`);
}

async function processAnswer(answer: SOPost, userId: number, site: SiteConfig) {
  const question = await fetchQuestion(answer.question_id!, site.key);
  const comments = await fetchComments(answer.answer_id!, userId, 'answers', site.key);
  const { year, dateStr } = formatDate(answer.creation_date);
  const slug = toSlug(question.title || 'untitled');
  const questionBq = turndown.turndown(question.body).split('\n').map((l) => `> ${l}`).join('\n');
  const answerMd = turndown.turndown(answer.body);
  const tags = (question.tags || []).map((t) => `  - ${escapeYaml(t)}`).join('\n');
  const isAccepted = answer.is_accepted ?? false;
  const acceptedNote = isAccepted ? ' *(accepted answer)*' : '';

  let transition: string;
  if (isAccepted && answer.score > 0) {
    transition = `*I posted the following answer, which was chosen as the accepted answer and received ${answer.score} upvote${answer.score === 1 ? '' : 's'}:*`;
  } else if (isAccepted) {
    transition = `*I posted the following answer, which was chosen as the accepted answer:*`;
  } else if (answer.score > 0) {
    transition = `*I posted the following answer, which received ${answer.score} upvote${answer.score === 1 ? '' : 's'}:*`;
  } else {
    transition = `*I posted the following answer:*`;
  }

  let content = `---
title: ${escapeYaml(question.title || 'Untitled')}
description: ${escapeYaml(`My answer to "${question.title}" on ${site.name}`)}
date: ${dateStr}
author:
  name: Nate Bross
tags:
${tags}
source: "${site.name}"
sourceUrl: "${site.url}/a/${answer.answer_id}"
---

*Someone [asked on ${site.name}](${site.url}/q/${question.question_id}):*

${questionBq}

${transition}

${answerMd}`;

  if (comments.length > 0) {
    const cm = comments.map((c) => `**${c.owner.display_name}** (${c.score}): ${turndown.turndown(c.body)}`).join('\n\n');
    content += `\n\n<details>\n<summary>Notable comments</summary>\n\n${cm}\n\n</details>`;
  }
  content += `\n\n---\n*Originally posted on [${site.name}](${site.url}/a/${answer.answer_id}) — ${answer.score} upvotes${acceptedNote}. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*\n`;
  writePost(join(isAccepted ? BLOG_DIR : ARCHIVE_DIR, year, `${slug}.md`), content);
}

async function processQuestion(question: SOPost, userId: number, site: SiteConfig) {
  const comments = await fetchComments(question.question_id!, userId, 'questions', site.key);
  const { year, dateStr } = formatDate(question.creation_date);
  const slug = toSlug(question.title || 'untitled');
  const questionMd = turndown.turndown(question.body);
  const tags = (question.tags || []).map((t) => `  - ${escapeYaml(t)}`).join('\n');
  let acceptedSection = '';

  if (question.accepted_answer_id) {
    const accepted = await fetchAcceptedAnswer(question.accepted_answer_id, site.key);
    if (accepted) {
      const bq = turndown.turndown(accepted.body).split('\n').map((l) => `> ${l}`).join('\n');
      acceptedSection = `\n\n---\n\n> [${accepted.owner.display_name} answered](${site.url}/a/${question.accepted_answer_id}) (${accepted.score} upvotes):\n>\n${bq}`;
    }
  }

  let content = `---
title: ${escapeYaml(question.title || 'Untitled')}
description: ${escapeYaml(`A question I asked on ${site.name}`)}
date: ${dateStr}
author:
  name: Nate Bross
tags:
${tags}
source: "${site.name}"
sourceUrl: "${site.url}/q/${question.question_id}"
---

*I [asked this on ${site.name}](${site.url}/q/${question.question_id}):*

${questionMd}${acceptedSection}`;

  if (comments.length > 0) {
    const cm = comments.map((c) => `**${c.owner.display_name}** (${c.score}): ${turndown.turndown(c.body)}`).join('\n\n');
    content += `\n\n<details>\n<summary>Notable comments</summary>\n\n${cm}\n\n</details>`;
  }
  content += `\n\n---\n*Originally posted on [${site.name}](${site.url}/q/${question.question_id}) — ${question.score} upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*\n`;
  writePost(join(question.score >= BLOG_MIN_SCORE && question.accepted_answer_id ? BLOG_DIR : ARCHIVE_DIR, year, `${slug}.md`), content);
}

async function main() {
  if (!USER_ID) {
    console.error('Usage: SO_USER_ID=12345 SO_SITE=stackoverflow npx tsx so-backup.ts');
    console.error('Available sites:', Object.keys(SITE_MAP).join(', '));
    process.exit(1);
  }
  const site = SITE_MAP[SITE_KEY];
  if (!site) { console.error(`Unknown site "${SITE_KEY}".`); process.exit(1); }
  console.log(`User ID: ${USER_ID}, Site: ${site.name}`);

  let page = 1, totalAnswers = 0;
  while (true) {
    const answers = await fetchAnswers(USER_ID, site.key, page);
    totalAnswers += answers.items.length;
    for (const a of answers.items) {
      try { await processAnswer(a, USER_ID, site); }
      catch (err) { console.warn(`  Skipped answer ${a.answer_id}: ${(err as Error).message}`); }
    }
    if (!answers.has_more) break;
    page++;
  }
  console.log(`Processed ${totalAnswers} answer(s) from ${site.name}`);

  page = 1; let totalQuestions = 0;
  while (true) {
    const questions = await fetchQuestions(USER_ID, site.key, page);
    totalQuestions += questions.items.length;
    for (const q of questions.items) {
      try { await processQuestion(q, USER_ID, site); }
      catch (err) { console.warn(`  Skipped question ${q.question_id}: ${(err as Error).message}`); }
    }
    if (!questions.has_more) break;
    page++;
  }
  console.log(`Processed ${totalQuestions} question(s) from ${site.name}`);
  console.log('\nDone!');
}

main().catch((err) => { console.error('Error:', err); process.exit(1); });
```
