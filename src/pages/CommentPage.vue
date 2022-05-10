<template>
  <main class="comment">
    <div class="comment-wrapper">
      <Introduction :avatar="avatar" />
      <Comment v-for="(comment, index) in comments" :key="index" :comment="comment" />
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
      comments: [],
      avatar: {},
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.id = Number(id);
    this.avatar = await this.fetchAvatar(this.id);
    // this.comments = await this.fetchComments(this.id);
    // TODO: API Response 있으면 삭제
    this.comments = [
      {
        content: '댓글1',
        createdAt: '2022-05-04T16:49:47.844Z',
        author: null,
      },
      {
        content: '댓글2',
        createdAt: '2022-05-04T16:49:47.844Z',
        author: null,
      },
    ];
  },
  methods: {
    async fetchComments(id) {
      const { data } = await getComments();
      return this.searchCommentById(id, data.data);
    },
    async fetchAvatar(id) {
      const { data } = await getAvatar(id);
      return data.data.attributes;
    },
    searchCommentById(id, datas) {
      return datas.find((data) => data.id === id).attributes.comments.data;
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
