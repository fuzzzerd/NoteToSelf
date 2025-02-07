<script setup lang="ts">
useHead({
  titleTemplate: '%s - Bross Tribe',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ],
  meta: [
    {
      name: 'msvalidate.01',
      content: '8015305C5FC955DE600FEBB07E5FED33'
    }
  ]
});

useSeoMeta({
  title: 'Welcome to my site!',
  ogSiteName: 'Bross Tribe',
  ogTitle: 'Bross Tribe',
  twitterTitle: 'Bross Tribe',
  description:
    'Welcome to my blog. This site consists of notes to myself. Hopeful that you find them useful.',
  ogDescription:
    'Welcome to my blog. This site consists of notes to myself. Hopeful that you find them useful.',
  twitterDescription:
    'Welcome to my blog. This site consists of notes to myself. Hopeful that you find them useful.',
  ogImage: { url: '/images/signed-b.png', width: 184, height: 288 },
  twitterImage: { url: '/images/signed-b.png', width: 184, height: 288 },
  twitterCard: 'summary_large_image'
});
</script>
<template>
  <div>
    <div id="rightColumn">
      <div id="main-container">
        <NuxtPage />
      </div>
    </div>
    <div id="leftColumn">
      <NuxtLink to="/" title="Official Bross Tribe">
        <img
          style="display: block; margin-left: auto; margin-right: auto"
          src="/images/signed-b.png"
          alt="signed letter b"
          width="100"
          height="124"
        />
      </NuxtLink>
      <hr />
      <p>
        Dad. Geek.
        <a
          rel="noopener"
          href="https://steamcommunity.com/id/Fuzzzerd"
          target="_blank"
          title="Steam Profile"
          >Gamer</a
        >.
        <a
          rel="noopener"
          href="https://github.com/fuzzzerd"
          target="_blank"
          title="Github profile"
          >Software developer.</a
        >
        Cloud user.
        <a
          rel="noopener noreferrer"
          href="http://www.carcruisechicago.com"
          target="_blank"
          title="one of my side projects"
          >Old Car enthusiast.</a
        >&nbsp;
        <NuxtLink no-prefetch to="/blog" title="Blog">Blogger.</NuxtLink>
      </p>
      <hr />
      <h3>Top Posts</h3>
      <ul>
        <li>
          <NuxtLink
            no-prefetch
            to="/blog/2018/graphing-united-states-road-highway-lane-milage-by-state-and-type-of-road"
            title="Graphing United States Road/Highway Lane Milage by State and Type Of Road"
          >
            Graphing United States Road/Highway Lane Mileage by State and Type
            Of Road
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            no-prefetch
            to="/blog/archives/optimizing-front-end-resources"
            title="Optimizing Front End Resources"
            >Optimizing Front End Resources</NuxtLink
          >
        </li>
        <li>
          <NuxtLink
            no-prefetch
            to="/blog/archives/great-tools-screen-to-gif"
            title="Great Tools: Screen To Gif"
          >
            Great Tools: Screen To Gif
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            no-prefetch
            to="/blog/archives/anatomy-of-a-blob-storage-uri-and-how-to-use-a-blob-name-prefix-to-make-azure-do-your-filtering"
            title="Anatomy of a blob storage Uri, and how to use a blob name prefix to make Azure do your filtering."
          >
            Anatomy of a blob storage Uri
          </NuxtLink>
        </li>
      </ul>
      <hr />
      <a
        rel="noopener noreferrer"
        title="profile for Nate on Stack Exchange."
        target="_blank"
        href="https://stackexchange.com/users/31585/nate"
      >
        <img
          src="https://stackexchange.com/users/flair/31585.png"
          alt="profile for Nate on Stack Exchange, a network of free, community-driven Q&amp;A sites"
          title="profile for Nate on Stack Exchange, a network of free, community-driven Q&amp;A sites"
          width="208"
          height="58"
        />
      </a>

      <hr />

      <a
        target="_blank"
        href="https://512kb.club"
        aria-label="a proud member of the blue team of 512KB club"
      >
        <img
          width="208"
          src="https://512kb.club/assets/images/blue-team.svg"
          alt="a proud member of the blue team of 512KB club"
        />
      </a>

      <hr />

      Thoughts, opinions, and ideas shared here are my own. All content &copy;
      {{ new Date().getFullYear() }} Nate Bross.
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-size: 17px;
  --left-column-width: 320px;
  --border-width: 3px;
  --border-style: dashed;
  --padding: 1rem;
  --padding-large: 2rem;
  --padding-extra-large: 2.5rem;
  --max-width: 975px;
  --font-family-heading: Palatino, serif;
  --font-weight-heading: lighter;
  --font-family-code: Consolas, 'Lucida Console', Monaco, 'Courier New', Courier,
    monospace;
  --font-size-h1: 2.1rem;
  --font-size-h2: 1.75rem;
  --font-size-h3: 1.5rem;
  --font-size-h4: 1.25rem;
  --font-size-h5: 1.125rem;
  --font-size-meta: 0.85em;
}

@media (prefers-color-scheme: light) {
  :root {
    --border-color: #ccc;
    --color-link: #00362b;
    --color-link-active: #63694c;
    --color-link-hover: #3a534f;
    --color-meta: #808080;
    --background-color: #ffffff;
    --color-text: #000000;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --border-color: #444;
    --color-link: #80cbc4;
    --color-link-active: #b2dfdb;
    --color-link-hover: #4db6ac;
    --color-meta: #b0bec5;
    --background-color: #121212;
    --color-text: #ffffff;
  }
}

html {
  font-family: var(--font-family);
  font-size: var(--font-size);
  background-color: var(--background-color);
  color: var(--color-text);
}

#leftColumn {
  h3 {
    margin: 0;
  }
}

#rightColumn {
  display: flex;
  justify-content: space-around;

  #main-container {
    max-width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  body {
    margin: 0;
    padding: 0;
    border: 0;
    overflow: hidden;
    height: 100%;
    max-height: 100%;
    background-color: var(--background-color);
  }

  #leftColumn {
    padding: var(--padding);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: var(--left-column-width);
    height: 100%;
    border-right: var(--border-width) var(--border-style) var(--border-color);
    overflow: hidden;

    ul {
      margin: 0;
    }
  }

  #rightColumn {
    padding: var(--padding) var(--padding-large) var(--padding)
      var(--padding-extra-large);
    position: fixed;
    top: 0;
    left: var(--left-column-width);
    right: 0;
    bottom: 0;
    overflow: auto;

    #main-container {
      width: calc(
        100vw - var(--left-column-width) - var(--border-width) - 7rem
      );
      max-width: var(--max-width);
    }
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 8px 0;
  margin: 0;
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-heading);
}

h1,
.h1 {
  font-size: var(--font-size-h1);
}

h2 {
  font-size: var(--font-size-h2);
}

h3 {
  font-size: var(--font-size-h3);
}

h4 {
  font-size: var(--font-size-h4);
}

h5 {
  font-size: var(--font-size-h5);
}

a {
  color: var(--color-link);

  &:active {
    color: var(--color-link-active);
  }

  &:hover {
    color: var(--color-link-hover);
  }
}

.noDecoration {
  text-decoration: none;
}

article {
  border-bottom: var(--border-width) var(--border-style) var(--border-color);

  &:last-of-type {
    padding-bottom: 3rem;
    border-bottom: none;
  }
}

.article-title {
  margin: 0;

  a {
    text-decoration: none;
  }
}

.article-meta {
  margin-top: 5px;
  font-size: var(--font-size-meta);
  color: var(--color-meta);
}

pre {
  border: 1px solid var(--border-color);
  padding: var(--padding);
  overflow-x: auto;
  font-family: var(--font-family-code);
}

blockquote {
  border-left: var(--border-width) solid var(--border-color);
  padding-left: var(--padding);
  margin: 0;
  font-family: var(--font-family-code);
}
</style>
