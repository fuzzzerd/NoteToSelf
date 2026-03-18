import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Build a map of blog post URLs to their lastmod/date for sitemap
async function getBlogDates() {
  const dates = new Map();
  const blogDir = 'src/content/blog';

  async function walk(dir, prefix = '') {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath, prefix ? `${prefix}/${entry.name}` : entry.name);
      } else if (entry.name.endsWith('.md')) {
        const content = await readFile(fullPath, 'utf-8');
        const frontmatter = content.match(/^---\n([\s\S]*?)\n---/);
        if (frontmatter) {
          const lastModMatch = frontmatter[1].match(/lastMod:\s*(.+)/);
          const dateMatch = frontmatter[1].match(/date:\s*(.+)/);
          const date = lastModMatch?.[1] || dateMatch?.[1];
          if (date) {
            const slug = prefix
              ? `${prefix}/${entry.name.replace(/\.md$/, '')}`
              : entry.name.replace(/\.md$/, '');
            dates.set(`/blog/${slug}`, new Date(date.trim()));
          }
        }
      }
    }
  }

  await walk(blogDir);
  return dates;
}

const blogDates = await getBlogDates();

export default defineConfig({
  site: 'https://www.brosstribe.com',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      serialize: (item) => {
        // Strip trailing slashes for consistency (except root)
        if (item.url.endsWith('/') && item.url !== 'https://www.brosstribe.com/') {
          item.url = item.url.slice(0, -1);
        }

        // Add lastmod from blog post frontmatter dates
        const path = item.url.replace('https://www.brosstribe.com', '');
        const date = blogDates.get(path);
        if (date) {
          item.lastmod = date;
        }

        return item;
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
