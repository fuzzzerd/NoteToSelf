---
title: Upgrading this site's Nuxt2 to Nuxt3 and Content Module v2
date: 2024-03-20
lastMod: 2024-03-20
author: 
  name: Nate Bross
tags: 
  - vue
  - nuxt
  - web development
---

I often use this site to play with new technology, and as such, it goes through a lot of technical changes. When the site was originally upgraded to Nuxt2, it had already been out for a while and Nuxt3 was in beta stage. So I knew this upgrade was coming. Working on some other projects, I realized I needed a bit better handle on Nuxt3 and decided to jump in.

## Using Content v2

Content v2 comes with a bunch of quality of life improvements. The ability to write Vue components that can be used in markdown, with parameters is incredible. I'm using that in a few projects, and hope to leverage it on this site too.

I had a hard time getting things to work, because I didn't read the docs. I started with `documentDriven` mode enabled to generate sitemap.xml. Since I was porting my Nuxt2/Content1 site, things weren't working. Running the site with `npm run dev` things seemed fine; however, `npm run generate` would fail with 404 errors on some content:

```
Errors prerendering:
  ├─ /api/_content/query/brX4CwCJoQ.1710967419806.json (13ms)
  │ ├── Error: [404] Document not found!
  │ └── Linked from /
  ├─ /api/_content/query/wxmlyJ2dlX.1710967419806.json (13ms)
  │ ├── Error: [404] Document not found!
  │ └── Linked from /blog
```

It turns out that the default route that gets added with `documentDriven: true` was conflicting in with my `[...slug].vue` file in a way that didn't totally break things, but didn't totally work either.

I ended up fixing that by backing out of `documentDriven` mode and updated my slug:

```html [slug.vue]{1} meta-info=val
<script setup lang="ts">
const { path } = useRoute();
const { data: article } = await useAsyncData(`catchall-${path}`, () => {
  return queryContent().where({ _path: { $regex: path } }).findOne();
});
</script>
<template>
  <blog-details v-if="article" :article="article"/>
  <ContentDoc v-else />
</template>
```

This allows me to use my existing `blog-details` component to render my articles, but also allows me to fall back to the `<ContentDoc />` renderer if needed. The astute observer will see that right now all routes go through the `blog-details` -- at a future date, if/when I want a different treatment I will update the query to only use it if the route starts with `/blog/*` and use different component for other paths.

This breaks the `@nuxt/sitemap` plug-in however, more on that below.

## Handling Images

The site is using both `@nuxt/image` and `nuxt-content-assets` which allows me to store my images right along side my `*.md` files in the `/content/` path. The docs explain how to make it all work, but I'm including a brief snip of the relevant configuration I needed to make it all work.

```js
// nuxt.config.ts
modules: [
  'nuxt-content-assets',
  '@nuxt/content',
  '@nuxt/image',
  '@nuxtjs/sitemap'
],
//...
image: {
  dir: '.nuxt/content-assets/public'
}
```

The `nuxt-content-assets` package requires this component be added to work with `@nuxt/image`:

```html
// /components/content/ProseImg.vue
<template>
  <nuxt-img />
</template>
```

## Sitemap.xml

With Nuxt Content `documentDriven: false` the sitemap doesn't generate any content, and the mechanism for automatically generating urls is a bit different in v5+ (for Nuxt3). Putting this kind of code into `nuxt.config.ts` is an anti-pattern, so support was dropped.

This requires setting up a server route, which can then be referenced in `nuxt.config.ts` as the source for the sitemap data.

```ts
// /server/api/sitemap.ts

import { serverQueryContent } from '#content/server';

export default defineSitemapEventHandler(async (e) => {
  const routes = [];

  const posts = await serverQueryContent(e).find();

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

  posts.map((p) => {
    routes.push({
      loc: p._path,
      lastmod: p.lastMod ? p.lastMod : p.date,
    });
  });

  return routes;
});
```

With this change to `nuxt.config.ts` to make it link up:

```ts
sitemap: {
  sources: ['/api/sitemap'],
},
```
