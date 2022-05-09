<template>
  <div>
    <div>코멘트</div>
    <CommentInput v-model="comment" @add="addCommentItem" />
    <CommentItem v-for="(commentItem, index) in commentItems" :key="index" :commentItem="commentItem" />
  </div>
</template>

<script>
import CommentInput from '@/components/Comment/CommentInput.vue';
import CommentItem from '@/components/Comment/CommentItem.vue';

export default {
  components: { CommentInput, CommentItem },
  data() {
    return {
      comment: {
        author: '',
        content: '',
      },
      commentItems: [
        {
          content: '오 민석씨 만나서 반가워요. 화이팅 하세요.',
          author: '익명익명익명익명익명익명',
        },
        {
          content:
            '항상 건강하세요~ 엄청나게 긴 글을 입력하면 어떻게 될까요 긴글긴글항상 건강하세요~ 엄청나게 긴 글을 입력하면 어떻게 될까요 긴글긴글항상 건강하세요~ 엄청나게 긴 글을 입력하면 어떻게 될까요 긴글긴글항상 건강하세요~ 엄청나게 긴 글을 입력하면 어떻게 될까요 긴글긴글',
          author: '익명의 돼지',
        },
      ],
    };
  },
  methods: {
    addCommentItem() {
      this.commentItems.push(this.comment);
      this.initComment();
    },
    initComment() {
      console.log('init');
      console.log(this.comment.author, this.comment.content);
    },
  },
};
</script>

<style></style>
