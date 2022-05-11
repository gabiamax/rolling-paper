<template>
  <div class="home-page">
    <AddUserModal v-if="isShowModal" @close="onCloseModal" />
    <button class="home-page__add-button" @click="onShowModal">
      <img src="@/assets/icons/bxs-user-plus.svg" alt="" />
    </button>
  </div>
</template>

<script>
import AddUserModal from '@/components/AddUserModal.vue';

export default {
  components: {
    AddUserModal,
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  methods: {
    onShowModal() {
      this.isShowModal = true;
    },
    onCloseModal(close) {
      this.isShowModal = close;
    },
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
