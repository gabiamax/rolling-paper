<template>
  <li class="comment__item">
    <div class="comment__item--author">{{ commentItem.attributes.author }}</div>
    <div class="comment__item--content">{{ commentItem.attributes.content }}</div>
    <button class="comment__item--delete no-print" @click="deleteComment">삭제</button>
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
  methods: {
    deleteComment() {
      this.$emit('delete');
    },
  },
};
</script>

<style scoped lang="scss">
.comment__item {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  background-color: #f2f3f5;
  &--author {
    min-width: 100px;
    font-weight: 600;
    margin: 1rem;
  }

  &--content {
    flex-grow: 1;
  }

  &--delete {
    color: white;
    background-color: black;
    border-radius: 6px;
    padding: 5px;
    margin: 1rem;
    min-width: 50px;
  }
}
</style>
