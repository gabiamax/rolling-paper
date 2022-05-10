<template>
  <div>
    <div>canvas api testing</div>
    <canvas id="avatars"></canvas>
  </div>
</template>

<script>
export default {
  name: 'AvatarsCanvas',
  props: {
    avatars: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
};
</script>
