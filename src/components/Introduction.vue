<template>
  <div class="introduction">
    <img class="avatar" :src="avatarImg" :alt="avatar.name" />
    <div class="wrapper">
      <div class="name">{{ avatar.name }}</div>
      <div class="description">{{ avatar.description }}</div>
    </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  .avatar {
    display: block;
    margin: 0px auto;
  }

  .wrapper {
    padding-bottom: 14px;
    max-width: 80%;
    min-width: 327px;
  }
  .name {
    margin-bottom: 7px;
  }

  .description {
    max-height: 100px;
    overflow-y: auto;
    padding: 12px 31px;
    background: #ecf7ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 26px 26px 26px;
  }
}
</style>
