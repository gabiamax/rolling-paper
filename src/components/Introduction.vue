<template>
  <div class="introduction">
    <img :src="avatarImg" :alt="avatars.name" />
    <div class="name">{{ avatars.name || '로딩중' }}</div>
    <div class="description">{{ avatars.description || '로딩중' }}</div>
  </div>
</template>

<script>
import defaultImage from '@/assets/images/women.png';
import { getAvatar } from '../api/avatar';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      avatars: {},
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
    this.fetchAvatar(this.id);
  },
  methods: {
    async fetchAvatar(id) {
      const { data } = await getAvatar(id);
      this.avatars = data.data.attributes;
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
    margin-bottom: 32px;
    padding: 12px 31px;
    background: #ecf7ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 26px 26px 26px;
  }
}
</style>
