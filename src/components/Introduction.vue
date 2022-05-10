<template>
  <div class="introduction">
    <img class="avatar" :src="avatarImg" :alt="avatar.name" />
    <div class="name">{{ avatar.name || '로딩중' }}</div>
    <div class="description">{{ avatar.description || '로딩중' }}</div>
  </div>
</template>

<script>
import defaultImage from '@/assets/images/women.png';

export default {
  props: {
    avatar: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      defaultImage,
    };
  },
  computed: {
    avatarImg: {
      get() {
        return this.avatar.img_src ?? defaultImage;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  .avatar {
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
