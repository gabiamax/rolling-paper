<template>
  <main class="comment">
    <button class="back" @click="$router.back()">
      <BackIcon />
    </button>
    <div v-if="isLoading" class="comment-wrapper">로딩중입니다</div>
    <div v-else id="print" class="comment-wrapper">
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
    <button class="fab no-print" @click="print"><PrintIcon /></button>
  </main>
</template>

<script>
import CommentInput from '@/components/Comment/CommentInput.vue';
import CommentItem from '@/components/Comment/CommentItem.vue';
import avatarApi from '@/api/avatar';
import commentApi from '@/api/comment';
import Introduction from '@/components/Introduction.vue';
import HTMLElementPrint from '@/utils/print';
import BackIcon from '@/assets/icons/back.svg';
import PrintIcon from '@/assets/icons/printer.svg';

export default {
  components: { Introduction, CommentInput, CommentItem, BackIcon, PrintIcon },
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
      await this.$ajaxWithErrorHandler({
        func: commentApi.postComment,
        params: { data: { avatar: this.id, ...this.commentInput } },
        errorMessage: '댓글을 등록할 수 없습니다',
      });
      this.comments = (await this.fetchUser(this.id)).comments;
      this.initCommentItem();
    },
    async deleteComment(commentId) {
      await this.$ajaxWithErrorHandler({
        func: commentApi.deleteComment,
        params: { id: commentId },
        errorMessage: '댓글을 삭제할 수 없습니다.',
      });
      this.comments = (await this.fetchUser(this.id)).comments;
    },
    print() {
      HTMLElementPrint('print', 1000, 700, '롤링페이퍼');
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/print.scss';
.back {
  position: fixed;
  top: 30px;
  left: 30px;
  cursor: pointer;
  svg path {
    fill: #fff;
  }
}

.comment {
  background: url('../assets/images/background.JPG');
  background-size: contain;
  &-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 769px;
    height: 100vh;
    margin: 0 auto;
    padding: 40px 45px 38px 45px;
    background: white;
  }

  .comment-list {
    width: 100%;
    margin-top: 0.5rem;
    overflow-y: auto;
    height: 500px;
    padding: 0 6px;
  }
}
</style>
