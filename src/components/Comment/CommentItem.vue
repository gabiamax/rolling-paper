<template>
  <li class="comment__item">
    <div class="comment__item--author">{{ commentItem.author }}</div>
    <div class="comment__item--content">{{ commentItem.content }}</div>
  </li>
</template>

<script>
export default {
  props: {
    commentItem: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped lang="scss">
.comment__item {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  &--author {
    min-width: 100px;
    max-width: 150px;
    font-weight: 600;
    margin: 0.8rem;
  }
}
</style>
