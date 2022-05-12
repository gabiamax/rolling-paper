<template>
  <main class="avatars-wrapper">
    <ul class="avatars-list">
      <li v-for="{ id, attributes: { name, img_src }, style } in avatars" :id="id" :key="id" :style="style">
        <router-link :to="'/comment/' + id" class="item-wrapper">
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
    return {
      defaultImage,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
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
  margin-top: 9vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.avatars-none {
  padding: 30px;
  text-align: center;
  font-size: 1.5rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px #00000075;
  border-radius: 26px;
}

.avatars-list {
  background-size: cover;
  width: 80vw;
  max-height: 60vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  li {
    height: 100%;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      filter: drop-shadow(0px 0px 4px #5abaff);
      & .avatar-name {
        background-color: #ffffff;
      }
    }
  }
}

.avatar-name {
  background-color: #ffffffa5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  padding: 2px 11px;
  text-align: center;
}
</style>
