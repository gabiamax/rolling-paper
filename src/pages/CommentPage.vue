<template>
  <main class="comment">
    <div class="comment-wrapper">
      <Introduction :id="2" />
      <Comment :id="3" />
    </div>
  </main>
</template>

<script>
import Introduction from '@/components/Introduction.vue';
import Comment from '@/components/Comment.vue';

export default {
  components: {
    Introduction,
    Comment,
  },
};
</script>

<style lang="scss" scoped>
.comment {
  background: url('../assets/images/background.JPG');
  background-size: contain;

  .comment-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 769px;
    height: 100vh;
    margin: 0 auto;
    padding: 43px 48px 38px 48px;
    background: #f2f3f5;
  }
}
</style>
