<template>
  <div>
    <div>코멘트</div>
    <CommentInput @add="addCommentItem" />
    <CommentItem
      v-for="commentItem in commentItems"
      :key="commentItem.id"
      :commentItem="commentItem"
      @delete="deleteCommentItem(commentItem.id)"
    />
  </div>
</template>

<script>
import CommentInput from '@/components/Comment/CommentInput.vue';
import CommentItem from '@/components/Comment/CommentItem.vue';

const MOCK = [
  {
    id: 2,
    attributes: {
      content: '화이팅하세요~',
      author: '익명',
    },
  },
  {
    id: 3,
    attributes: {
      content: '오 민석씨 만나서 반가워요. 화이팅 하세요.',
      author: '익명익명익명익명익명익명',
    },
  },
  {
    id: 4,
    attributes: {
      content:
        '항상 건강하세요~ 엄청나게 긴 글을 입력하면 어떻게 될까요 긴글긴글항상 건강하세요~ 엄청나게 긴 글을 입력하면 어떻게 될까요 긴글긴글항상 건강하세요~ 엄청나게 긴 글을 입력하면 어떻게 될까요 긴글긴글항상 건강하세요~ 엄청나게 긴 글을 입력하면 어떻게 될까요 긴글긴글',
      author: '익명의 돼지',
    },
  },
];

export default {
  components: { CommentInput, CommentItem },
  data() {
    return {
      commentItems: MOCK,
    };
  },
  methods: {
    addCommentItem(comment) {
      this.commentItems.push({ id: 5, attributes: comment });
    },
    deleteCommentItem(commentId) {
      this.commentItems = this.commentItems.filter(({ id }) => id !== commentId);
    },
  },
};
</script>

<style></style>
