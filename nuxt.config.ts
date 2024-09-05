// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  site: {
    url: 'https://www.brosstribe.com'
  },
  modules: ['nuxt-content-assets', '@nuxt/content', '@nuxtjs/seo'],
  content: {
    documentDriven: false,
    highlight: {
      theme: { default: 'github-light', dark: 'github-dark' },
      preload: ['js', 'ts', 'cs', 'csharp', 'xml']
    },
    markdown: {
      anchorLinks: false
    }
  },
  contentAssets: {
    // treat these extensions as content
    contentExtensions: 'md csv ya?ml json'
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  sitemap: {
    sources: ['/api/sitemap']
  },
  experimental: {
    sharedPrerenderData: true
  },
  compatibilityDate: '2024-09-04'
});
