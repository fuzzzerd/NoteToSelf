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

interface SiteConfig {
  key: string;
  name: string;
  url: string;
}

const SITE_MAP: Record<string, SiteConfig> = {
  stackoverflow: {
    key: 'stackoverflow',
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com'
  },
  serverfault: {
    key: 'serverfault',
    name: 'Server Fault',
    url: 'https://serverfault.com'
  },
  superuser: {
    key: 'superuser',
    name: 'Super User',
    url: 'https://superuser.com'
  },
  gamedev: {
    key: 'gamedev',
    name: 'Game Development',
    url: 'https://gamedev.stackexchange.com'
  },
  dba: {
    key: 'dba',
    name: 'Database Administrators',
    url: 'https://dba.stackexchange.com'
  }
};

function apiParams(): string {
  return API_KEY ? `&key=${API_KEY}` : '';
}

// Brief delay between API calls to avoid hammering
function delay(ms = 500): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

interface SOUser {
  user_id: number;
  display_name: string;
}

interface SOPost {
  answer_id?: number;
  question_id?: number;
  body: string;
  score: number;
  creation_date: number;
  owner: { user_id: number; display_name: string };
  tags?: string[];
  title?: string;
  link?: string;
  is_accepted?: boolean;
  accepted_answer_id?: number;
}

interface SOComment {
  comment_id: number;
  body: string;
  score: number;
  owner: { user_id: number; display_name: string };
}

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  fence: '```'
});

// Preserve code blocks with language hints
turndown.addRule('fencedCodeBlock', {
  filter: (node) => node.nodeName === 'PRE' && !!node.querySelector('code'),
  replacement: (_content, node) => {
    const code = (node as HTMLElement).querySelector('code')!;
    const className = code.getAttribute('class') || '';
    const langMatch =
      className.match(/language-(\w+)/) ||
      className.match(/lang-(\w+)/) ||
      className.match(/prettyprint-(\w+)/);
    const lang = langMatch ? langMatch[1] : '';
    const text = code.textContent || '';
    return `\n\n\`\`\`${lang}\n${text}\n\`\`\`\n\n`;
  }
});

async function fetchJson<T>(url: string, retries = 3): Promise<T> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const res = await fetch(url);
    const data = await res.json();

    // Handle backoff — wait then retry
    if (data.backoff) {
      console.warn(`  Backoff requested: ${data.backoff}s — waiting...`);
      await new Promise((r) => setTimeout(r, data.backoff * 1000));
    }

    // Handle throttle / rate limit errors — wait and retry
    if (data.error_id === 502 || res.status === 429) {
      const wait = (data.backoff || 10) * attempt;
      console.warn(
        `  Rate limited (attempt ${attempt}/${retries}), waiting ${wait}s...`
      );
      await new Promise((r) => setTimeout(r, wait * 1000));
      continue;
    }

    // Other API errors
    if (data.error_id) {
      throw new Error(
        `SO API error: ${data.error_name} - ${data.error_message}`
      );
    }

    if (!res.ok) {
      throw new Error(`API error ${res.status}: ${url}`);
    }

    // Quota tracking
    if (data.quota_remaining !== undefined) {
      console.log(`  (API quota remaining: ${data.quota_remaining})`);
    }

    return data;
  }
  throw new Error(`Failed after ${retries} retries: ${url}`);
}

async function fetchAnswers(
  userId: number,
  site: string,
  page = 1
): Promise<{ items: SOPost[]; has_more: boolean }> {
  await delay();
  return fetchJson(
    `${SO_API}/users/${userId}/answers?order=desc&sort=votes&site=${site}&filter=withbody&pagesize=${PAGE_SIZE}&page=${page}${apiParams()}`
  );
}

async function fetchQuestions(
  userId: number,
  site: string,
  page = 1
): Promise<{ items: SOPost[]; has_more: boolean }> {
  await delay();
  return fetchJson(
    `${SO_API}/users/${userId}/questions?order=desc&sort=votes&site=${site}&filter=withbody&pagesize=${PAGE_SIZE}&page=${page}${apiParams()}`
  );
}

async function fetchQuestion(
  questionId: number,
  site: string
): Promise<SOPost> {
  await delay();
  const data = await fetchJson<{ items: SOPost[] }>(
    `${SO_API}/questions/${questionId}?site=${site}&filter=withbody${apiParams()}`
  );
  return data.items[0];
}

async function fetchAcceptedAnswer(
  answerId: number,
  site: string
): Promise<SOPost | null> {
  await delay();
  const data = await fetchJson<{ items: SOPost[] }>(
    `${SO_API}/answers/${answerId}?site=${site}&filter=withbody${apiParams()}`
  );
  return data.items[0] ?? null;
}

async function fetchComments(
  postId: number,
  userId: number,
  type: 'answers' | 'questions',
  site: string
): Promise<SOComment[]> {
  await delay();
  const data = await fetchJson<{ items: SOComment[] }>(
    `${SO_API}/${type}/${postId}/comments?site=${site}&order=desc&sort=creation&filter=withbody${apiParams()}`
  );
  return data.items.filter((c) => c.score >= 3 || c.owner.user_id === userId);
}

function toSlug(title: string): string {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  // Truncate at 60 chars on a word boundary
  if (slug.length <= 60) return slug;
  const truncated = slug.slice(0, 60);
  const lastDash = truncated.lastIndexOf('-');
  return lastDash > 20 ? truncated.slice(0, lastDash) : truncated;
}

function formatDate(epochSeconds: number): {
  iso: string;
  year: string;
  dateStr: string;
} {
  const d = new Date(epochSeconds * 1000);
  const iso = d.toISOString().split('T')[0];
  const year = String(d.getFullYear());
  return { iso, year, dateStr: iso };
}

function escapeYaml(s: string): string {
  if (/[:"'\[\]{}#&*!|>%@`]/.test(s) || s.includes('\n')) {
    return `"${s.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }
  return `"${s}"`;
}

function writePost(filePath: string, content: string) {
  const dir = join(filePath, '..');
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, content, 'utf-8');
  console.log(`  Written: ${filePath}`);
}

function answerOutputDir(isAccepted: boolean): string {
  return isAccepted ? BLOG_DIR : ARCHIVE_DIR;
}

function questionOutputDir(score: number): string {
  return score >= BLOG_MIN_SCORE ? BLOG_DIR : ARCHIVE_DIR;
}

async function processAnswer(answer: SOPost, userId: number, site: SiteConfig) {
  const question = await fetchQuestion(answer.question_id!, site.key);
  const comments = await fetchComments(
    answer.answer_id!,
    userId,
    'answers',
    site.key
  );
  const { year, dateStr } = formatDate(answer.creation_date);
  const slug = toSlug(question.title || 'untitled');

  const questionMd = turndown.turndown(question.body);
  const answerMd = turndown.turndown(answer.body);

  const tags = (question.tags || []).map((t) => `  - ${t}`).join('\n');

  // Indent question body as a blockquote
  const questionBlockquote = questionMd
    .split('\n')
    .map((line) => `> ${line}`)
    .join('\n');

  const isAccepted = answer.is_accepted ?? false;
  const acceptedNote = isAccepted ? ' *(accepted answer)*' : '';

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

${questionBlockquote}

${answerMd}`;

  if (comments.length > 0) {
    const commentsMd = comments
      .map((c) => {
        const body = turndown.turndown(c.body);
        return `**${c.owner.display_name}** (${c.score} upvotes): ${body}`;
      })
      .join('\n\n');

    content += `

<details>
<summary>Notable comments</summary>

${commentsMd}

</details>`;
  }

  content += `

---
*Originally posted on [${site.name}](${site.url}/a/${answer.answer_id}) — ${answer.score} upvotes${acceptedNote}. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
`;

  const filePath = join(answerOutputDir(isAccepted), year, `${slug}.md`);
  writePost(filePath, content);
}

async function processQuestion(
  question: SOPost,
  userId: number,
  site: SiteConfig
) {
  const comments = await fetchComments(
    question.question_id!,
    userId,
    'questions',
    site.key
  );
  const { year, dateStr } = formatDate(question.creation_date);
  const slug = toSlug(question.title || 'untitled');

  const questionMd = turndown.turndown(question.body);

  const tags = (question.tags || []).map((t) => `  - ${t}`).join('\n');

  let acceptedAnswerSection = '';

  if (question.accepted_answer_id) {
    const accepted = await fetchAcceptedAnswer(
      question.accepted_answer_id,
      site.key
    );
    if (accepted) {
      const acceptedMd = turndown.turndown(accepted.body);
      const acceptedBlockquote = acceptedMd
        .split('\n')
        .map((line) => `> ${line}`)
        .join('\n');
      acceptedAnswerSection = `

---

> [${accepted.owner.display_name} answered](${site.url}/a/${question.accepted_answer_id}) (${accepted.score} upvotes):
>
${acceptedBlockquote}`;
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

${questionMd}${acceptedAnswerSection}`;

  if (comments.length > 0) {
    const commentsMd = comments
      .map((c) => {
        const body = turndown.turndown(c.body);
        return `**${c.owner.display_name}** (${c.score} upvotes): ${body}`;
      })
      .join('\n\n');

    content += `

<details>
<summary>Notable comments</summary>

${commentsMd}

</details>`;
  }

  content += `

---
*Originally posted on [${site.name}](${site.url}/q/${question.question_id}) — ${question.score} upvotes. Licensed under [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/).*
`;

  const filePath = join(questionOutputDir(question.score), year, `${slug}.md`);
  writePost(filePath, content);
}

async function main() {
  if (!USER_ID) {
    console.error(
      'Usage: SO_USER_ID=12345 SO_SITE=stackoverflow npx tsx so-backup.ts'
    );
    console.error('Available sites:', Object.keys(SITE_MAP).join(', '));
    process.exit(1);
  }

  const site = SITE_MAP[SITE_KEY];
  if (!site) {
    console.error(
      `Unknown site "${SITE_KEY}". Available:`,
      Object.keys(SITE_MAP).join(', ')
    );
    process.exit(1);
  }

  console.log(`User ID: ${USER_ID}, Site: ${site.name}`);

  // Fetch all answers with pagination
  console.log(`\nFetching answers (pagesize=${PAGE_SIZE})...`);
  let page = 1;
  let totalAnswers = 0;
  while (true) {
    const answers = await fetchAnswers(USER_ID, site.key, page);
    totalAnswers += answers.items.length;
    for (const answer of answers.items) {
      console.log(
        `\nProcessing answer ${answer.answer_id} (score: ${answer.score})...`
      );
      try {
        await processAnswer(answer, USER_ID, site);
      } catch (err) {
        console.warn(
          `  Skipped answer ${answer.answer_id}: ${(err as Error).message}`
        );
      }
    }
    if (!answers.has_more) break;
    page++;
  }
  console.log(`\nProcessed ${totalAnswers} answer(s) from ${site.name}`);

  // Fetch all questions with pagination
  console.log(`\nFetching questions (pagesize=${PAGE_SIZE})...`);
  page = 1;
  let totalQuestions = 0;
  while (true) {
    const questions = await fetchQuestions(USER_ID, site.key, page);
    totalQuestions += questions.items.length;
    for (const question of questions.items) {
      console.log(
        `\nProcessing question ${question.question_id} (score: ${question.score})...`
      );
      try {
        await processQuestion(question, USER_ID, site);
      } catch (err) {
        console.warn(
          `  Skipped question ${question.question_id}: ${(err as Error).message}`
        );
      }
    }
    if (!questions.has_more) break;
    page++;
  }
  console.log(`Processed ${totalQuestions} question(s) from ${site.name}`);

  console.log('\nDone!');
}

main().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
