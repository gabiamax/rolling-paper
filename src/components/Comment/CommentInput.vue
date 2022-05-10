<template>
  <div class="comment__input">
    <label for="author-input" class="comment__input--author">
      <input id="author-input" v-model="author" placeholder="작성자" />
    </label>
    <label for="content-input" class="comment__input--content">
      <input id="content-input" v-model="content" placeholder="댓글을 입력해주세요." />
    </label>
    <button type="button" class="comment__button--add" @click="addComment">등록</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: '',
      content: '',
    };
  },
  methods: {
    addComment() {
      this.$emit('add', { author: this.author, content: this.content });
      this.initComment();
    },
    initComment() {
      this.author = '';
      this.content = '';
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
