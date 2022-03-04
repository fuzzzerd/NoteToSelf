---
title: Adding a Sitemap.xml file for Nuxt Content
date: 2022-03-03
author: 
  name: Nate Bross
tags: 
  - web development
  - seo
  - nuxt
---

Nuxt has a [built-in sitemap generator plugin](https://sitemap.nuxtjs.org/), which is great! The [content plugin also has a nice section on integrating with the sitemap plugin](https://content.nuxtjs.org/integrations/#nuxtjssitemap). Those were really useful starting points for me, but I had a few special requirements.

- specify `lastmod` appropriately
- specify priority to posts over lists
- customize `changefreq` for some of the built-in mapped pages

I ended up with the following `nuxt.config.js` section to accommodate my use:

```js
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
```

This allows me to specify that my posts don't change often, but I do go in and fix typos or make updates occasionally so I don't want them flagged as `never` I also wanted them to take priority over my home and blog list pages. So I set their priority to 1, and the root page and the /blog page to lower priority relative to my posts.

The other thing I wanted to include was my `lastmod` flag, which I track in Nuxt Content using front matter.

```md
---
date: 2022-03-04
lastMod: 2022-03-04
---
```

Note that I had to update my Content query to include my fields, and then specify them:

```js
const files = await $content({ deep: true })
      .only(['path', 'lastMod', 'date'])
      .fetch();
///
{
  lastmod: file.lastMod || file.date
}
```

this says use the last modification date, otherwise the created date.

Overall this function is fairly bloated, but given that `nuxt.config.js` is essentially a dumping ground of all of the various plugin configs, mine is small enough right now it wasn't worth making a separate file and importing that; however, that is a viable route mentioned in the sitemap plugin's docs.
