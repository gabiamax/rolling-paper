<template>
  <div class="introduction">
    <img :src="avatarImg" :alt="avatars.name" />
    <div class="name">{{ avatars.name }}</div>
    <div class="description">{{ avatars.description }}</div>
  </div>
</template>

<script>
import defaultImage from '@/assets/images/gijin.png';
import { getComment } from '../api/comment';
import { getAvatar } from '../api/avatar';

export default {
  data() {
    return {
      avatars: {},
      comments: [],
      defaultImage,
    };
  },
  computed: {
    avatarImg: {
      get() {
        return this.avatars.img_src ?? defaultImage;
      },
    },
  },
  created() {
    // TODO: Params로 내려온 id값 사용
    this.fetchAvatar(2);
    this.fetchComment();
  },
  methods: {
    async fetchAvatar(id) {
      const { data } = await getAvatar(id);
      this.avatars = data.data.attributes;
    },
    async fetchComment() {
      const { data } = await getComment();
      // TODO: Params로 내려온 id값 사용
      this.searchCommentById(2, data.data);
    },
    searchCommentById(id, datas) {
      this.comments = datas.find((data) => data.id === id).attributes.comments.data;
    },
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  img {
    display: block;
    margin: 0px auto;
  }
  .name {
    margin-bottom: 7px;
  }

  .description {
    display: flex;
    align-items: center;
    width: 327px;
    height: 62px;
    padding: 12px 31px;
    background: #ecf7ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 26px 26px 26px;
  }
}
</style>
