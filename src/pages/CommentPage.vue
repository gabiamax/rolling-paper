<template>
  <main class="comment">
    <div class="comment-wrapper">
      <div v-if="isLoading">로딩중입니다</div>
      <div v-else>
        <div v-if="isAvatarExist">
          <Introduction :isLoading="isLoading" :avatar="avatar" />
        </div>
        <div v-else>아바타가 없습니다.</div>
        <CommentInput v-model="commentInput" @submit="addComment" />
        <ul v-if="isCommentExist" class="comment-list">
          <CommentItem
            v-for="comment in comments"
            :key="comment.id"
            :comment="comment"
            @delete="deleteComment(comment.id)"
          />
        </ul>
        <div v-else>댓글이 없습니다.</div>
      </div>
    </div>
  </main>
</template>

<script>
import CommentInput from '@/components/Comment/CommentInput.vue';
import CommentItem from '@/components/Comment/CommentItem.vue';
import avatarApi from '@/api/avatar';
import commentApi from '@/api/comment';
import Introduction from '@/components/Introduction.vue';

export default {
  components: { Introduction, CommentInput, CommentItem },
  data() {
    return {
      id: '',
      avatar: {},
      commentInput: {
        author: '',
        content: '',
      },
      comments: [],
      isLoading: true,
    };
  },
  computed: {
    isAvatarExist() {
      return Object.keys(this.avatar).length > 0;
    },
    isCommentExist() {
      return this.comments.length > 0;
    },
  },
  async created() {
    const { id } = this.$route.params;
    this.id = Number(id);
    const { avatar, comments } = await this.fetchUser(this.id);
    this.avatar = avatar;
    this.comments = comments;
  },
  methods: {
    initCommentItem() {
      this.commentInput = { author: '', content: '' };
    },
    async fetchUser(id) {
      const response = await this.$ajaxWithErrorHandler({
        func: avatarApi.getCertainUser,
        params: { id },
        errorMessage: '사용자 정보를 불러올 수 없습니다',
      });
      this.isLoading = false;
      const comments = response?.data.data.attributes.comments.data.reverse() ?? [];
      const avatar = response?.data.data.attributes ?? {};
      return { comments, avatar };
    },
    async addComment() {
      try {
        await commentApi.postComment({ avatar: this.id, ...this.commentInput });
        this.comments = (await this.fetchUser(this.id)).comments;
        this.initCommentItem();
      } catch (e) {
        alert(e.message);
      }
    },
    async deleteComment(commentId) {
      try {
        await commentApi.deleteComment(commentId);
        this.comments = (await this.fetchUser(this.id)).comments;
      } catch (e) {
        alert(e.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  .comment-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 769px;
    height: 100vh;
    margin: 0 auto;
    padding: 43px 48px 38px 48px;
    background: white;
  }

  .comment-list {
    width: 100%;
    margin-top: 0.5rem;
    overflow-y: auto;
    height: 500px;
  }
}
</style>
