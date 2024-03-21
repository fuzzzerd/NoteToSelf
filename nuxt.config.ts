// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  site: {
    url: 'https://www.brosstribe.com',
  },
  modules: [
    'nuxt-content-assets',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/seo'
  ],
  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-light',
      preload: ['js', 'ts', 'cs', 'csharp', 'xml']
    },
    markdown: {
      anchorLinks: false,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Josefin+Slab|Share+Tech+Mono|VT323|Poppins|Source+Code+Pro'
        }
      ]
    },
  },
  contentAssets: {
    // treat these extensions as content
    contentExtensions: 'md csv ya?ml json'
  },
  nitro: {
    prerender: {
      crawlLinks: true
    },
  },
  sitemap: {
    sources: ['/api/sitemap'],
  },
  image: {
    dir: '.nuxt/content-assets/public'
  }
});
