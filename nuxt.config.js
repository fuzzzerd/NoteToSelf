export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BrossTribe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Josefin+Slab|Share+Tech+Mono|VT323|Poppins|Source+Code+Pro'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-70773470-1'
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  sitemap: {
    hostname: 'https://www.brosstribe.com',
    gzip: true,
    routes: async () => {
      const routes = [];

      const { $content } = require('@nuxt/content');
      const files = await $content({ deep: true })
        .only(['path', 'lastMod', 'date'])
        .fetch();

      routes.push({
        url: '/',
        changefreq: 'weekly',
        priority: 0.5
      });

      routes.push({
        url: '/blog',
        changefreq: 'weekly',
        priority: 0.75
      });

      for (const file of files) {
        routes.push({
          url: file.path === '/index' ? '/' : file.path,
          changefreq: 'yearly',
          priority: 1,
          lastmod: file.lastMod || file.date
        });
      }

      return routes;
    }
  }
};
