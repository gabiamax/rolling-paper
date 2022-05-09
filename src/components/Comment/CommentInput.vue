<template>
  <div class="comment__input">
    <label for="author-input" class="comment__input--author">
      <input id="author-input" ref="author" :comment="comment.author" placeholder="작성자" @input="handleInput" />
    </label>
    <label for="content-input" class="comment__input--content">
      <input
        id="content-input"
        ref="content"
        :comment="comment.content"
        placeholder="댓글을 입력해주세요."
        @input="handleInput"
      />
    </label>
    <button type="button" class="comment__button--add" @click="addComment">등록</button>
  </div>
</template>

<script>
export default {
  props: {
    comment: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleInput() {
      this.$emit('input', {
        author: this.$refs.author.value,
        content: this.$refs.content.value,
      });
    },
    addComment() {
      this.$emit('add');
    },
  },
};
</script>

<style lang="scss" scoped>
.comment__input {
  display: flex;
  margin: 1rem;

  &--author {
    margin-right: 0.5rem;
  }

  &--content {
    margin-right: 0.5rem;
  }

  .comment__button--add {
    background-color: black;
    color: white;
    border-radius: 6px;
    width: 50px;
    cursor: pointer;
  }
}
</style>
