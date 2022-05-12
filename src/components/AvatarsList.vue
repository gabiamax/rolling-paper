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
      // avatar: {
      //   isMove: false,
      //   top: null,
      //   left: null,
      //   originX: null,
      //   originY: null,
      // },
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
  height: 60vh;

  //! 알고리즘에도 사용해야 함: 상수 분리 어떻게? => 위치 기능 유보
  // width: 1000px;
  // height: 700px;
  position: relative;
  li {
    position: absolute;
    width: 15%;
    height: auto;

    //! 알고리즘에도 사용해야 함: 상수 분리 어떻게? => 위치 기능 유보
    // height: 269px;
    // width: 150px;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    img {
      width: 167px;
      height: 167px;
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
