<template>
  <div class="comment__input">
    <label for="author-input" class="comment__input--author">
      <input id="author-input" ref="author" v-model="author" name="author" placeholder="작성자" />
    </label>
    <label for="content-input" class="comment__input--content">
      <input id="content-input" v-model="content" name="content" placeholder="댓글을 입력해주세요" />
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
  mounted() {
    this.focusInput();
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
    focusInput() {
      this.$refs.author.focus();
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

  input {
    outline: none;
    border: none;
    padding: 0.3rem;
    border-bottom: 1px solid black;
    &:focus {
      border-bottom: 2px solid black;
    }
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
