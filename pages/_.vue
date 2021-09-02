<template>
  <div>
    <article>
      <h1>{{ article.title }}</h1>
      <p class="artical-meta">
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
