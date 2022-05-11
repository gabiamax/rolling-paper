<template>
  <div class="select-avatar">
    <div v-if="avatarType === 'male'" class="select-avatar__view">
      <img src="@/assets/images/man.png" alt="" />
    </div>
    <div v-else-if="avatarType === 'female'" class="select-avatar__view">
      <img src="@/assets/images/women.png" alt="" />
    </div>
    <div v-else class="select-avatar__view">
      <p v-if="!customUrl">이미지 주소를 입력해주세요</p>
      <img v-else :src="customUrl" alt="" @error="$emit('error')" @load="$emit('load', false)" />
    </div>
    <div class="select-avatar__radio">
      <label for="avatar-type-male" @change="$emit('select', 'male')">
        <input id="avatar-type-male" type="radio" name="avatar-type" checked />
        <p>male</p>
      </label>
      <label for="avatar-type-female" @change="$emit('select', 'female')">
        <input id="avatar-type-female" type="radio" name="avatar-type" />
        <p>female</p>
      </label>
      <label for="avatar-type-custom" @change="$emit('select', 'custom')">
        <input id="avatar-type-custom" type="radio" name="avatar-type" />
        <p>custom</p>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectAvatar',
  props: {
    avatarType: {
      type: String,
      required: true,
    },
    customUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
// TODO: radio 버튼 style
.select-avatar {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 3rem;
  width: 45%;

  &__view {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 15rem;
    margin: 1rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__radio {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    label {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }
  }
}
</style>
