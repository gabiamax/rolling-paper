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
      characters: getAvatars(),
    };
  },
};
</script>

<style></style>
