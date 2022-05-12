<template>
  <div class="select-avatar">
    <div v-if="isCheckType('male')" class="select-avatar__view">
      <img src="@/assets/images/man.png" alt="" />
    </div>
    <div v-else-if="isCheckType('female')" class="select-avatar__view">
      <img src="@/assets/images/women.png" alt="" />
    </div>
    <div v-else class="select-avatar__view">
      <p v-if="!customUrl">이미지 주소를 입력해주세요</p>
      <img v-else :src="customUrl" alt="" @error="$emit('error')" @load="$emit('load', false)" />
    </div>
    <div class="select-avatar__radio">
      <label v-for="(type, index) in avatarTypes" :key="type" :for="`avatar-type-${type}`" @change="onChangeType(type)">
        <input
          :id="`avatar-type-${type}`"
          type="radio"
          name="avatar-type"
          :class="`select-avatar__radio--${type}`"
          :checked="isFirstIndex(index)"
        />
        <p>{{ type }}</p>
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
  data() {
    return {
      avatarTypes: ['male', 'female', 'custom'],
    };
  },
  methods: {
    onChangeType(type) {
      this.$emit('select', type);
    },
    isCheckType(type) {
      return this.avatarType === type;
    },
    isFirstIndex(index) {
      return index === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
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

      p {
        margin-top: 4px;
      }
    }

    input[type='radio'] {
      display: grid;
      place-content: center;
      appearance: none;
      margin: 0;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;

      &::before {
        content: '';
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
      }

      &:checked::before {
        border: 3px solid #5f5b5b;
      }
    }

    &--male {
      background: #86cff8;
    }
    &--female {
      background: #faa8a8;
    }
    &--custom {
      background-image: url(@/assets/images/custom.jpg);
      background-size: cover;
    }
  }
}
</style>
