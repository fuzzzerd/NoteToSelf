const fs = require('fs')
const path = require('path')
const copyContentImages = (src: string, dest: string, ignore: string[]) => {
  const exists = fs.existsSync(src)
  const stats = exists && fs.statSync(src)
  const isDirectory = exists && stats.isDirectory()
  if (isDirectory) {
    if (!fs.existsSync(dest) || !fs.statSync(src).isDirectory()) {
      fs.mkdirSync(dest)
    }
    fs.readdirSync(src).forEach((childItemName: string) => {
      copyContentImages(
        path.join(src, childItemName),
        path.join(dest, childItemName),
        ignore
      )
    })
  } else {
    const ext = path.extname(src)
    if (!ignore.includes(ext)) {
      fs.copyFileSync(src, dest)
    }
  }
}

copyContentImages('content', 'public', ['.md'])

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  site: {
    url: 'https://www.brosstribe.com',
  },
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false
    }
  },
  app: {
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
          href: 'https://fonts.googleapis.com/css?family=Josefin+Slab|Share+Tech+Mono|VT323|Poppins|Source+Code+Pro'
        }
      ]
    },
  },
  sitemap: {
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '25%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' },
    ],
  },
  nitro: {
    prerender: {
      crawlLinks: true
    },
  }
});
