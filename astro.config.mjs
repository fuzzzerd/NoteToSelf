import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
