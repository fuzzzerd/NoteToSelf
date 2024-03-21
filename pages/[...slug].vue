<script setup lang="ts">
const { path, params } = useRoute();
const { data: article } = await useAsyncData(
  `catchall-${params.slug}`,
  async () => {
    return await queryContent()
      .where({ _path: { $regex: path } })
      .findOne();
  }
);

if (article) {
  useContentHead(article);
  defineOgImageComponent('UnJs');
}
</script>
<template>
  <blog-details v-if="article" :article="article" />
  <ContentDoc v-else />
</template>
