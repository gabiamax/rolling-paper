<template>
  <div class="introduction">
    <img src="@/assets/images/gijin.png" alt="아바타 이미지" />
    <div class="name">{{ name }}</div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '위니',
      description: '안녕하세요 프론트엔드개발팀 신입사원 위니입니다.',
    };
  },
};
</script>

<style lang="scss" scoped>
.introduction {
  img {
    display: block;
    margin: 0px auto;
  }
  .name {
    margin-bottom: 7px;
  }

  .description {
    display: flex;
    align-items: center;
    width: 327px;
    height: 62px;
    padding: 12px 31px;
    background: #ecf7ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px 26px 26px 26px;
  }
}
</style>
