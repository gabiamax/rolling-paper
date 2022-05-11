<template>
  <div>{{ comment.attributes.content }}</div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
