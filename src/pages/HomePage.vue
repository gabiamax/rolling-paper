<template>
  <div class="home-page">
    <!-- HEADER 넣기 -->
    <Header />
    <AvatarsList :avatars="avatars" />
    <AddUserModal v-if="isShowModal" @close="onCloseModal" />
    <button class="home-page__add-button" @click="onShowModal">
      <img src="@/assets/icons/bxs-user-plus.svg" alt="" />
    </button>
  </div>
</template>

<script>
import AvatarsList from '@/components/AvatarsList.vue';
import avatarApi from '@/api/avatar';
import { SIZE } from '@/utils/constants';
import Header from '@/components/Header.vue';
import AddUserModal from '@/components/AddUserModal.vue';

export default {
  components: { Header, AvatarsList, AddUserModal },
  data() {
    return {
      avatars: [],
      isShowModal: false,
    };
  },
  async created() {
    const data = await this.fetchAvatars();

    // TODO 임시: 뿌려줄 때 마다 랜덤 값 지정
    data.forEach((avatar) => {
      const unit = '%';
      const { x, y } = this.getRandomXY(SIZE.WRAPPER, SIZE.AVATAR, unit);
      /* eslint-disable */
      avatar.style = { top: y, left: x};
    });
    this.avatars = data;
  },
  methods: {
    async fetchAvatars() {
      const avatars = await avatarApi.getAvatars()
      return avatars.data.data;
    },
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    getRandomXY(wrapper, avatar, unit='px') {
      const maxX = wrapper.width - avatar.width;
      const maxY = wrapper.height - avatar.height;

      const x = this.getRandomNumber(0, maxX) + unit;
      const y = this.getRandomNumber(0, maxY) + unit;
      return { x, y };
    },
    onShowModal() {
      this.isShowModal = true;
    },
    onCloseModal(close) {
      this.isShowModal = close;
    }
  },
};
</script>

<style lang="scss">
.home-page {
  position: relative;
  width: 100vw;
  height: 100vh;

  &__add-button {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }
}
</style>
