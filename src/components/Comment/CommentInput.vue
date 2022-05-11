<template>
  <form class="comment__form no-print" @submit.prevent="checkCommentForm">
    <div class="comment__container--author">
      <label for="author-input" class="comment__input--author">
        <input
          id="author-input"
          ref="author"
          :value="value.author"
          name="author"
          placeholder="작성자"
          @input="updateInput"
        />
      </label>
      <p v-show="!value.author.trim()">작성자를 입력해주세요</p>
    </div>
    <div class="comment__container--content">
      <label for="content-input" class="comment__input--content">
        <input
          id="content-input"
          :value="value.content"
          name="content"
          placeholder="댓글을 입력해주세요"
          @input="updateInput"
        />
      </label>
      <p v-show="!value.content.trim()">댓글을 입력해주세요</p>
    </div>
    <div>
      <button type="submit" class="comment__button--add">등록</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.focusInput();
  },
  methods: {
    updateInput(e) {
      const { name, value } = e.target;
      this.$emit('input', { ...this.value, [name]: value });
    },
    focusInput() {
      this.$refs.author.focus();
    },
    checkCommentForm() {
      const { author, content } = this.value;
      if (author.trim() && content.trim()) {
        this.$emit('submit');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.comment__form {
  display: flex;
  justify-content: center;
  margin: 1rem;
  height: 80px;
  .comment__container--author {
    margin: 0.5rem;
  }

  .comment__container--content {
    margin: 0.5rem;
    width: 400px;
    input {
      width: 100%;
    }
  }

  p {
    color: red;
    font-size: 14px;
    margin-top: 10px;
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
    width: 60px;
    height: 40px;
    margin: 0.5rem;
    cursor: pointer;
  }
}
</style>
