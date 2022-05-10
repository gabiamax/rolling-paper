<template>
  <main class="avatars-wrapper">
    <ul class="avatars-list">
      <!-- :style="top: x, top:y" -->
      <li v-for="{ id, attributes: { name, img_src }, positions } in avatars" :id="id" :key="id" :style="positions">
        <router-link :to="'/comment/' + id">
          <img :src="img_src || defaultImage" :alt="name" :title="name" />
          <div class="avatar-name">{{ name }}</div>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import defaultImage from '@/assets/images/man.png';

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
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
//! BEM으로 스타일 정리하기
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
  margin-top: 100px;
}

.avatars-list {
  /* background-image: url('@/assets/images/background.JPG'); */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-size: cover;
  width: 1000px;
  height: 700px;
  position: relative;
}

.avatars-list li {
  position: absolute;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.avatar-name {
  //! Hover시 투명도 없애기
  // background-color: #ffffff;
  background-color: #ffffffa5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 6px;
  margin-top: 10px;
  text-align: center;
}
</style>
