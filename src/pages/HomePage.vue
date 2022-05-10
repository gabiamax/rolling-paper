<template>
  <div>
    <div>홈</div>
    <AvatarsCanvas />
  </div>
</template>

<script>
import AvatarsCanvas from '@/components/AvatarsCanvas.vue';
import { getAvatars } from '@/api/avatar';

export default {
  components: { AvatarsCanvas },
  data() {
    return {
      avatars: [],
    };
  },
  async created() {
    this.avatars = await this.fetchAvatars(); // Promise.all
  },
  methods: {
    async fetchAvatars() {
      //* 비동기 적용해야하는지 더 고민해보기
      //* return await getAvatars()는 왜 안되나
      const avatars = await getAvatars();
      return avatars;
    },
  },
};
</script>

<style></style>
