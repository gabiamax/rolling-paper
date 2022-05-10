<template>
  <div>댓글하이용{{ id }}</div>
</template>

<script>
import { getComment } from '../api/comment';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      comments: [],
    };
  },
  async created() {
    this.comments = await this.fetchComment(this.id);
  },
  methods: {
    async fetchComment(id) {
      const { data } = await getComment();
      return this.searchCommentById(id, data.data);
    },
    searchCommentById(id, datas) {
      return datas.find((data) => data.id === id).attributes.comments.data;
    },
  },
};
</script>

<style></style>
