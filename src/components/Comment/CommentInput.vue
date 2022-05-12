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
          maxlength="10"
          @input="updateInput"
          @focus="authorFocused = true"
          @blur="authorFocused = false"
        />
      </label>
      <p v-if="authorFocused">{{ errors.author }}</p>
      <p else>&nbsp;</p>
    </div>
    <div class="comment__container--content">
      <label for="content-input" class="comment__input--content">
        <input
          id="content-input"
          :value="value.content"
          name="content"
          placeholder="댓글을 입력해주세요"
          @input="updateInput"
          @focus="contentFocused = true"
          @blur="contentFocused = false"
        />
      </label>
      <p v-if="contentFocused">{{ errors.content }}</p>
      <p else>&nbsp;</p>
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
    errors: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      authorFocused: false,
      contentFocused: false,
    };
  },
  methods: {
    updateInput(e) {
      const { name, value } = e.target;
      this.$emit('input', { ...this.value, [name]: value });
    },
    checkCommentForm() {
      const { author, content } = this.value;
      if (author.trim() && content.trim()) {
        this.$emit('submit');
      } else {
        alert('작성자와 댓글을 입력 후 등록해주세요!');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.comment__form {
  display: flex;
  justify-content: center;
  margin: 0.5rem;
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
    background-color: #2985db;
    color: white;
    border-radius: 6px;
    width: 60px;
    height: 40px;
    margin: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: darken(#2985db, 10%);
    }
  }
}
</style>
