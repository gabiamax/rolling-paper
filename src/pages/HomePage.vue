<template>
  <div class="home-page">
    <!-- HEADER 넣기 -->
    <Header />
    <AvatarsList :avatars="avatars" />
    <AddUserModal v-if="isShowModal" @close="onCloseModal" />
    <button class="fab" @click="onShowModal">
      <PlusIcon />
    </button>
  </div>
</template>

<script>
import AvatarsList from '@/components/AvatarsList.vue';
import avatarApi from '@/api/avatar';
import { SIZE } from '@/utils/constants';
import Header from '@/components/Header.vue';
import AddUserModal from '@/components/AddUserModal.vue';
import PlusIcon from '@/assets/icons/plus.svg';

export default {
  components: { Header, AvatarsList, AddUserModal, PlusIcon },
  data() {
    return {
      avatars: [],
      isShowModal: false,
    };
  },
  async created() {
    await this.init();
  },
  methods: {
    async init() {
      const avatars = await this.fetchAvatars();

      // TODO 임시: 뿌려줄 때 마다 랜덤 값 지정
      avatars.forEach((avatar) => {
        const unit = '%';
        const { x, y } = this.getRandomXY(SIZE.WRAPPER, SIZE.AVATAR, unit);
        /* eslint-disable */
      avatar.style = { top: y, left: x};
    });
    this.avatars = avatars;
    },
    async fetchAvatars() {
      const response = await this.$ajaxWithErrorHandler({
        func: avatarApi.getAvatars,
        errorMessage: '등록된 사용자들을 불러올 수 없습니다',
      });
      this.isLoading = false;
      const avatars = response?.data.data ?? [];
      return avatars;
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
    async onCloseModal(close) {
      await this.init();
      this.isShowModal = close;
    }
  },
};
</script>

<style lang="scss">
</style>
