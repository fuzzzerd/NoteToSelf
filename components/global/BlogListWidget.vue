<template>
  <blog-details
    v-for="article of articles"
    :key="article.slug"
    :article="article"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  postCount?: number;
}>();

const { data: articles } = await useAsyncData(
  `content-${props.postCount}`,
  () => {
    const cnt = queryContent()
      .where({ _path: { $regex: `/blog/*` } })
      .sort({ date: -1 });

    if (props.postCount) {
      cnt.limit(props.postCount);
    }

    return cnt.find();
  }
);
</script>
