<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';

const props = defineProps<{
  article?: ParsedContent;
}>()

function formatDate(input: string) {
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
</script>

<template>
  <article v-if="article">
    <h2 class="h1">
      <NuxtLink role="heading" level="1" :to="article._path">
        {{ article.title }}
      </NuxtLink>
    </h2>

    <p class="article-meta">
      {{ formatDate(article.date) }}
      by <NuxtLink to="/resume">{{ article.author.name }}</NuxtLink>
    </p>

    <ContentRenderer :value="article" />
  </article>
</template>
