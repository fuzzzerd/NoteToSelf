<script>
export default {
  name: 'BlogListWidget',
  props: {
    postCount: { type: Number, default: undefined }
  },
  data() {
    return {
      articles: []
    };
  },
  async fetch() {
    let chain = this.$content('blog', { deep: true }).sortBy('date', 'desc');

    if (this.postCount) {
      chain = chain.limit(this.postCount);
    }

    this.articles = await chain.fetch();
  },
  fetchKey: 'home-blog',
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
<template>
  <div>
    <h1>Blog Posts</h1>

    <article v-for="article of articles" :key="article.slug">
      <NuxtLink class="h1" :to="article.path">
        {{ article.title }}
      </NuxtLink>
      <p class="artical-meta">
        {{ formatDate(article.date) }}
        by <a href="#">{{ article.author.name }}</a>
      </p>

      <nuxt-content :document="article" />
      <hr />
    </article>
  </div>
</template>
