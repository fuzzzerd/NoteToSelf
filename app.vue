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

      <a target="_blank" href="https://512kb.club">
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
// Body, Left and Right Column Setup
html {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 17px;
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
  }

  #leftColumn {
    padding: 1rem;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 320px; /*Width of frame div*/
    height: 100%;
    border-right: 3px dashed #ccc;
    overflow: hidden; /*Disable scrollbars. Set to "scroll" to enable*/

    ul {
      margin: 0;
    }
  }

  #rightColumn {
    padding: 1rem 2rem 1rem 2.5rem;
    position: fixed;
    top: 0;
    left: 320px; /*Set left value to width+padding+border of leftColumn*/
    right: 0;
    bottom: 0;
    overflow: auto;
    #main-container {
      width: calc(100vw - 320px - 3px - 7rem);
      max-width: 975px;
    }
  }
}

// * end body and column setup
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 8px 0;
  margin: 0;
  font-family: Palatino, serif;
  font-weight: lighter;
}

h1,
.h1 {
  font-size: 2.1rem;
  font-family: Palatino, serif;
}

h2 {
  font-size: 1.75rem;
}

h3 {
  font-size: 1.5rem;
}

h4 {
  font-size: 1.25rem;
}

h5 {
  font-size: 1.125rem;
}

a {
  color: #00362b;

  &:active {
    color: #63694c;
  }

  &:hover {
    color: #3a534f;
  }
}

.noDecoration {
  text-decoration: none;
}

article {
  border-bottom: 3px dashed #ccc;
  // make sure that long posts have some breathing room at the footer
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
  font-size: 0.85em;
  color: #808080;
}

pre {
  border: 1px dashed #ccc;
  padding: 1rem;
  overflow-x: auto;
  font-family: Consolas, 'Lucida Console', Monaco, 'Courier New', Courier,
    monospace;
}

blockquote {
  border-left: 3px dashed #ccc;
  padding-left: 1rem;
  margin: 0;
  font-family: Consolas, 'Lucida Console', Monaco, 'Courier New', Courier,
    monospace;
}
</style>
