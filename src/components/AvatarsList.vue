<template>
  <div class="avatars-wrapper">
    <ul class="avatars-list">
      <!-- :style="top: x, top:y" -->
      <!-- 값을 바인딩할 때 스트링과 섞어쓰려면 어떻게 해야하나? -->
      <li v-for="{ id, attributes: { name, img_src }, positions } in avatars" :id="id" :key="id" :style="positions">
        {{ img_src }}
        <img :src="img_src || defaultImage" :alt="name" :title="name" />
        <div class="avatar-name">{{ name }}</div>
      </li>
      <!-- <img src="@/assets/images/avatar_tmp.png" alt="q" /> -->
    </ul>
  </div>
</template>

<script>
import defaultImage from '@/assets/images/avatar_tmp.png';

export default {
  name: 'AvatarsList',
  props: {
    avatars: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    // return {
    return {
      defaultImage,
      // img_src_default: 'https://www.avatarsinpixels.com/minipix/5/16521605141676/avatar.png',
    };
  },
  methods: {},
};
</script>

<style scoped>
/* 기본 스타일이지만 필수적이라 추가 */
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.avatars-wrapper {
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.avatars-list {
  background-image: url('@/assets/images/background.JPG');
  background-size: cover;
  width: 1000px;
  height: 700px;
  position: relative;
}

.avatars-list li {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-name {
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 6px;
  margin-top: 10px;
}
</style>
