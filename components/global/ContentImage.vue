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
