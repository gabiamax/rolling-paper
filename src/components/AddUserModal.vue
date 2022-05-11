<template>
  <div class="add-user-modal">
    <div class="add-user-modal__container">
      <div class="add-user-modal__wrap wrap-title">
        <h1>Welcome {{ nickname }}!</h1>
        <button class="close-btn" @click="$emit('close', false)">
          <img src="@/assets/icons/bx-x.svg" alt="" />
        </button>
      </div>
      <div class="add-user-modal__form">
        <div class="add-user-modal__wrap wrap-avatar">
          <div v-if="avatarType === 'male'" class="wrap-avatar__view">
            <img src="@/assets/images/man.png" alt="" />
          </div>
          <div v-else-if="avatarType === 'female'" class="wrap-avatar__view">
            <img src="@/assets/images/women.png" alt="" />
          </div>
          <div v-else class="wrap-avatar__view">
            <p v-if="customUrl === ''">이미지 주소를 입력해주세요</p>
            <img v-else :src="customUrl" alt="" @error="imgErrorHandler" @load="checkDisabled = false" />
          </div>
          <div class="wrap-avatar__select">
            <label for="avatar-type-male" @change="selectAvatarType('male')">
              <input id="avatar-type-male" type="radio" name="avatar-type" checked />
              <p>male</p>
            </label>
            <label for="avatar-type-female" @change="selectAvatarType('female')">
              <input id="avatar-type-female" type="radio" name="avatar-type" />
              <p>female</p>
            </label>
            <label for="avatar-type-custom" @change="selectAvatarType('custom')">
              <input id="avatar-type-custom" type="radio" name="avatar-type" />
              <p>custom</p>
            </label>
          </div>
        </div>
        <div class="add-user-modal__wrap wrap-input">
          <p class="sub-title">닉네임</p>
          <input
            :value="nickname"
            type="text"
            class="add-user-modal__form--input nickname-input"
            placeholder="닉네임을 입력해주세요"
            @input="updateNickname"
          />
          <p class="sub-title">자기소개</p>
          <label for="description">
            <textarea
              id="description"
              :value="description"
              style="resize: none"
              class="add-user-modal__form--input description-input"
              placeholder="자기소개를 입력해주세요"
              @input="updateDescription"
            />
          </label>
          <div v-if="avatarType === 'custom'">
            <p class="sub-title">이미지 주소</p>
            <div class="wrap-custom-input">
              <input
                :value="inputCustomUrl"
                type="text"
                class="add-user-modal__form--input custom-input"
                placeholder="이미지 주소를 입력해주세요"
                @input="updateInputCustomUrl"
              />
              <button
                class="custom-btn"
                :disabled="inputCustomUrl.length < 1"
                @click="applyCustomAvatar(inputCustomUrl)"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="add-user-modal__wrap wrap-bottom">
        <button class="custom-btn" :disabled="isDisabled" @click="addAvatar">생성하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import { postAvatar } from '@/api/avatar';

export default {
  name: 'AddUserModal',
  data() {
    return {
      avatarType: 'male',
      avatarUrl: '',
      customUrl: '',
      inputCustomUrl: '',
      nickname: '',
      description: '',
      checkDisabled: true,
    };
  },
  computed: {
    isDisabled() {
      if (this.avatarType !== 'custom') {
        return this.nickname.length < 1 || this.description.length < 1;
      }

      return this.checkDisabled;
    },
  },
  methods: {
    selectAvatarType(type) {
      this.avatarType = type;
    },
    applyCustomAvatar(inputUrl) {
      this.customUrl = inputUrl;
    },
    imgErrorHandler() {
      this.customUrl = '';
      this.checkDisabled = true;
    },
    updateNickname(e) {
      this.nickname = e.target.value;
    },
    updateDescription(e) {
      this.description = e.target.value;
    },
    updateInputCustomUrl(e) {
      this.inputCustomUrl = e.target.value;
    },
    getAvatarUrl() {
      const defaultUrlMale =
        'https://www.avatarsinpixels.com/minipix/eyJQYW50cyI6IjEiLCJUb3AiOiIyIiwiSmFja2V0IjoiMyJ9/1/show.png';
      const defaultUrlFemale =
        'https://www.avatarsinpixels.com/chibi/eyJIYWlyTG93ZXIiOiI5IiwiUGFudHMiOiIxMyIsIlRvcCI6IjIwIiwiTW91dGgiOiIxIiwiSGFpclRvcCI6IjIiLCJoYWlyVG9uZSI6IjMzMzMzMyIsImV5ZXNUb25lIjoiODg4ODg4In0=/1/show.png';

      if (this.avatarUrl === '') {
        if (this.avatarType === 'male') {
          return defaultUrlMale;
        }
        return defaultUrlFemale;
      }

      return this.avatarUrl;
    },
    // http://www.avatarsinpixels.com/minipix/eyJNb3V0aCI6IjEiLCJTb2NrcyI6IjMiLCJQYW50cyI6IjEiLCJUb3AiOiIyIiwiSmFja2V0IjoiMiIsInBhbnRzVG9uZSI6IjQ0NDQ0NCIsInRvcFRvbmUiOiJmZmZmZmYiLCJzb2Nrc1RvbmUiOiIwYzAwNjEiLCJqYWNrZXRUb25lIjoiZWVlZWVlIn0=/1/show.png
    async addAvatar() {
      const data = {
        name: this.nickname,
        description: this.description,
        img_link: this.getAvatarUrl(),
      };
      await postAvatar(data)
        .then((res) => {
          if (res.status === 200) {
            alert(`캐릭터 생성 완료\n${this.nickname}님 환영합니다!`);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.add-user-modal {
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.67);

  &__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5% 20%;
    padding: 2rem;
    border-radius: 48px;
    background: #ffffff;
  }

  svg {
    cursor: pointer;
  }

  &__form {
    width: 100%;
    display: flex;
    flex: 2 3;

    &--input {
      border-radius: 12px;
      border: 2px solid black;
      padding: 12px;
      margin-bottom: 1rem;
    }
  }

  &__wrap {
    width: 100%;
  }
}

.wrap-avatar {
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

  &__select {
    display: flex;
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
.wrap-input {
  display: flex;
  flex-direction: column;
  width: 55%;
}

.wrap-title {
  display: flex;
  justify-content: space-between;
  height: inherit;
  margin-bottom: 1rem;
}

.sub-title {
  margin-bottom: 0.5rem;
}

.description-input {
  width: 100%;
  min-height: 8rem;
}

.custom-input {
  width: 80%;
  margin-bottom: 0;
}

.custom-btn {
  width: 20%;
  margin-left: 0.5rem;
  padding: 12px;
  background: black;
  color: white;
  border-radius: 12px;

  &:disabled {
    background: #b4b4b4;
    cursor: default;
  }
}

.wrap-custom-input {
  display: flex;
  justify-content: space-between;
}

.wrap-bottom {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
</style>
