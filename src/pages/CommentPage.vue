<template>
  <main class="comment">
    <div id="print" class="comment-wrapper">
      <Introduction :avatar="avatar" />
      <CommentInput v-model="comment" @submit="addCommentItem" />
      <CommentItem
        v-for="commentItem in comments"
        :key="commentItem.id"
        :commentItem="commentItem"
        @delete="deleteCommentItem(commentItem.id)"
      />
    </div>
    <button class="fab no-print" @click="print">print</button>
  </main>
</template>
<script>
import CommentInput from '@/components/Comment/CommentInput.vue';
import CommentItem from '@/components/Comment/CommentItem.vue';
import { getAvatar, getCertainAvatarInfo } from '@/api/avatar';
import Introduction from '@/components/Introduction.vue';
import HTMLElementPrint from '@/utils/print';

export default {
  components: { Introduction, CommentInput, CommentItem },
  data() {
    return {
      comments: [],
      comment: {
        author: '',
        content: '',
        id: this.id,
      },
      avatar: {},
      id: '',
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.id = Number(id);
    this.avatar = await this.fetchAvatar(this.id);
    this.comments = await this.fetchAllInfo(this.id);
  },
  methods: {
    addCommentItem() {
      // TODO : API 연결 필요
      this.comments.push({ id: 5, attributes: this.comment });
      this.initCommentItem();
    },
    deleteCommentItem(commentId) {
      this.comments = this.comments.filter(({ id }) => id !== commentId);
    },
    initCommentItem() {
      this.comment = { ...this.comment, author: '', content: '' };
      // this.comment.author = '';
      // this.comment.content = '';
    },
    async fetchAllInfo(id) {
      const { data } = await getCertainAvatarInfo(id);
      const commentInfo = data.data.attributes.comments.data;
      return commentInfo;
    },
    async fetchAvatar(id) {
      const { data } = await getAvatar(id);
      return data.data.attributes;
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
    background: #f2f3f5;
  }
}
</style>
