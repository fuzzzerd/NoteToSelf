---
title: Migrating the site to Nuxt with Content module
date: 2021-08-20
author: 
  name: Nate Bross
tags: 
  - web development
---
The site has been hosted on Umbraco for many years, prior to that it was a windows live spaces blog, and before that I forget... Technology moves fast, and has long been time to switch platforms.

I have wanted to switch to a markdown based blog for a while. First, to see if I can do it; but also to reduce the need for a database and app service to run the blog. Just a static site generated when I make changes is plenty.

## Setting up routing

The standard nuxt content module blog suggests using a slug system to route blog content. For a simple blog, that would probably work, but I don't like the way it guides you to drop all content in a single folder. It was also difficult to get working with any kind of sub folder system.

I wanted to have a system like this

> - content/blog
> - content/blog/archive
> - content/blog/archive/post1.md
> - content/blog/2018/post5.md
> - content/blog/2019/post15.md

To support this kind of folder structure, and keep sane routing, following the default nuxt content system works very well. I ended up with a simple `_.vue` file in the main pages folder.

```vue
<template>
  <div>
    <article>
      <h1>{{ article.title }}</h1>
      <p class="article-meta">
        {{ formatDate(article.date) }}
        by <a href="#">{{ article.author.name }}</a>
      </p>
      <nuxt-content :document="article" />
    </article>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content(params.pathMatch).fetch();
    return { article };
  },
  methods: {
    formatDate(input) {
      // fix day behind issue
      // https://stackoverflow.com/a/45407500/86860

      // Date object a day behind
      const utcDate = new Date(input);
      // local Date
      const localDate = new Date(
        utcDate.getTime() + utcDate.getTimezoneOffset() * 60000
      );

      return localDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
};
</script>
```

I've included a little date formatter here, that converts the `string` date tag stored in the markdown files, and converts it to the users local timezone (this prevents the day behind issue noted in the comment).

This makes for very simple system of writing and managing my main content, and keeps the routing very simple:

```vue
<NuxtLink :to="article.path">
  {{ article.title }}
</NuxtLink>
```

## Handling images

Dealing with images in the content was a little tricky, but with a bit of a searching the solution is to enable components in content.

First, ensure that `nuxt.config.js` has components enabled:

```js
export default {
  components: true
}
```

Then setup an image binding component in `components/global`, which I found a great example of here: <https://woetflow.com/posts/working-with-images-in-nuxt-content/>.

```vue
<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`~/assets/images/${this.src}`);
      } catch (error) {
        return null;
      }
    }
  }
};
</script>
<template>
  <img :src="imgSrc()" :alt="alt" class="inline-max" />
</template>

<style scoped>
.inline-max {
  max-width: 100%;
}
</style>
```

Doing this pushes all the images through webpack, but means that referencing them in a markdown file is pretty easy:

```html
<content-image 
  src="folder/file.png"
  alt="alt text"></content-image>
```

## Looking Forward

This was a really fun project. I've simplified my website setup, using a static site generator to make the full website at build time.

This should also make it easier to try out some interesting interactive components inside blog posts and I hope to take advantage of that in future posts.
