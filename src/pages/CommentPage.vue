<template>
  <main class="comment">
    <div id="print" class="comment-wrapper">
      <Introduction :avatar="avatar" />
      <CommentInput v-model="comment" @submit="addCommentItem" />
      <ul class="comment-list">
        <CommentItem
          v-for="commentItem in comments"
          :key="commentItem.id"
          :commentItem="commentItem"
          @delete="deleteCommentItem(commentItem.id)"
        />
      </ul>
    </div>
    <button class="fab no-print" @click="print">print</button>
  </main>
</template>
<script>
import CommentInput from '@/components/Comment/CommentInput.vue';
import CommentItem from '@/components/Comment/CommentItem.vue';
import avatarApi from '@/api/avatar';
import commentApi from '@/api/comment';
import Introduction from '@/components/Introduction.vue';
import HTMLElementPrint from '@/utils/print';

export default {
  components: { Introduction, CommentInput, CommentItem },
  data() {
    return {
      id: '',
      avatar: {},
      comment: {
        author: '',
        content: '',
      },
      comments: [],
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.id = Number(id);
    this.avatar = await this.fetchAvatar(this.id);
    this.comments = await this.fetchComment(this.id);
  },
  methods: {
    async deleteCommentItem(commentId) {
      try {
        await commentApi.deleteComment(commentId);
        this.comments = await this.fetchComment(this.id);
      } catch (e) {
        alert(e.message);
      }
    },
    initCommentItem() {
      this.comment = { ...this.comment, author: '', content: '' };
    },
    async fetchComment(id) {
      const { data } = await avatarApi.getCertainAvatarInfo(id);
      const commentInfo = data.data.attributes.comments.data.reverse();
      return commentInfo;
    },
    async fetchAvatar(id) {
      const { data } = await avatarApi.getAvatar(id);
      return data.data.attributes;
    },

    async addCommentItem() {
      try {
        await commentApi.postComment({ avatar: this.id, ...this.comment });
        this.comments = await this.fetchComment(this.id);
        this.initCommentItem();
      } catch (e) {
        alert(e.message);
      }
    },
    // searchCommentById(id, datas) {
    //   return datas.find((data) => data.id === id).attributes.comments.data;
    // },
    print() {
      HTMLElementPrint('print', 1000, 700, '롤링페이퍼');
    },
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/print.scss';
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
