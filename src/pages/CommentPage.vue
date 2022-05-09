<template>
  <main class="comment-wrapper">
    <div class="comment">
      <Introduction />
    </div>
  </main>
</template>

<script>
import Introduction from '@/components/Introduction.vue';

export default {
  components: {
    Introduction,
  },
};
</script>

<style lang="scss" scoped>
.comment-wrapper {
  height: 100vh;
  .comment {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 769px;
    height: 100%;
    margin: 0 auto;
    padding: 43px 48px 38px 48px;
    background: #f2f3f5;
  }
}
</style>
