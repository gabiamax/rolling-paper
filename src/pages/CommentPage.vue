<template>
  <main class="comment">
    <div class="comment-wrapper">
      <div v-if="isLoading">로딩중입니다</div>
      <div v-else>
        <div v-if="isAvatarExist">
          <Introduction :isLoading="isLoading" :avatar="avatar" />
        </div>
        <div v-else>아바타가 없습니다.</div>
        <div v-if="isCommentExist">
          <Comment v-for="(comment, index) in comments" :key="index" :comment="comment" />
        </div>
        <div v-else>댓글이 없습니다.</div>
      </div>
    </div>
  </main>
</template>

<script>
import { getComments } from '@/api/comment';
import { getAvatar } from '@/api/avatar';
import Comment from '@/components/Comment.vue';
import Introduction from '@/components/Introduction.vue';

export default {
  components: {
    Introduction,
    Comment,
  },
  data() {
    return {
      id: '',
      avatar: {},
      comments: [],
      // TODO: api endpoint 수정하면 isLoading으로 수정
      isAvatarLoading: true,
      isCommentLoading: true,
    };
  },
  computed: {
    isAvatarExist() {
      return Object.keys(this.avatar).length > 0;
    },
    isCommentExist() {
      return this.comments.length > 0;
    },
    isLoading() {
      return this.isAvatarLoading || this.isCommentLoading;
    },
  },
  async created() {
    const { id } = this.$route.params;
    this.id = Number(id);
    this.avatar = await this.fetchAvatar(this.id);
    this.comments = await this.fetchComments(this.id);
  },
  methods: {
    // TODO: api endpoint 수정하고 하나로 묶기
    async fetchComments(id) {
      const response = await this.$ajaxWithErrorHandler({
        func: getComments,
        errorMessage: '댓글을 불러올 수 없습니다',
      });
      this.isCommentLoading = false;
      return this.searchCommentById(id, response.data.data) ?? [];
    },
    async fetchAvatar(id) {
      const response = await this.$ajaxWithErrorHandler({
        func: getAvatar,
        params: { id },
        errorMessage: '아바타를 불러올 수 없습니다',
      });

      this.isAvatarLoading = false;
      return response?.data.data.attributes ?? {};
    },
    searchCommentById(id, datas) {
      return datas.find((data) => data.id === id)?.attributes.comments.data;
    },
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
