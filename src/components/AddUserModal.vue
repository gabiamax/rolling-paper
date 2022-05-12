<template>
  <div class="add-user-modal">
    <div class="add-user-modal__container">
      <div class="add-user-modal__wrap--title">
        <h1>Welcome {{ nickname }}!</h1>
        <button class="close-btn" @click="$emit('close', false)">
          <CloseIcon />
        </button>
      </div>
      <div class="add-user-modal__form">
        <SelectAvatar
          :customUrl="customUrl"
          :avatarType="avatarType"
          @select="selectAvatarType"
          @error="imgErrorHandler"
          @load="setCheckDisabled"
        ></SelectAvatar>
        <div class="add-user-modal__wrap--input">
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
          <div v-if="checkType('custom')">
            <p class="sub-title">이미지 주소</p>
            <div class="wrap-custom-input">
              <input
                :value="inputCustomUrl"
                type="text"
                class="add-user-modal__form--input custom-input"
                placeholder="이미지 주소를 입력해주세요"
                @input="updateInputCustomUrl"
              />
              <button class="custom-btn" :disabled="!inputCustomUrl.length" @click="applyCustomAvatar(inputCustomUrl)">
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="add-user-modal__wrap--bottom">
        <button class="custom-btn" :disabled="isDisabled" @click="addAvatar">생성하기</button>
      </div>
    </div>
  </div>
</template>

<script>
import avatarApi from '@/api/avatar';
import SelectAvatar from '@/components/AddUserModal/SelectAvatar.vue';
import CloseIcon from '@/assets/icons/close.svg';

export default {
  name: 'AddUserModal',
  components: { SelectAvatar, CloseIcon },
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
    checkType(type) {
      return this.avatarType === type;
    },
    setCheckDisabled(isDisable) {
      this.checkDisabled = isDisable;
    },
    completeAddAvatar() {
      alert(`캐릭터 생성 완료\n${this.nickname}님 환영합니다!`);
      this.$emit('close', false);
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
        if (this.avatarType === 'female') {
          return defaultUrlFemale;
        }

        return this.customUrl;
      }

      return this.avatarUrl;
    },
    // ? 테스트용 avatar url : http://www.avatarsinpixels.com/minipix/eyJNb3V0aCI6IjEiLCJTb2NrcyI6IjMiLCJQYW50cyI6IjEiLCJUb3AiOiIyIiwiSmFja2V0IjoiMiIsInBhbnRzVG9uZSI6IjQ0NDQ0NCIsInRvcFRvbmUiOiJmZmZmZmYiLCJzb2Nrc1RvbmUiOiIwYzAwNjEiLCJqYWNrZXRUb25lIjoiZWVlZWVlIn0=/1/show.png
    // TODO: error handler 연결
    async addAvatar() {
      const data = {
        name: this.nickname,
        description: this.description,
        img_src: this.getAvatarUrl(),
      };
      await avatarApi
        .postAvatar(data)
        .then((res) => {
          if (res.status === 200) {
            this.completeAddAvatar();
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
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
    margin: auto 20%;
    padding: 2rem 2rem 1.5rem 2rem;
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
      margin-bottom: 0.5rem;
    }
  }

  &__wrap {
    width: 100%;

    &--title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }

    &--input {
      display: flex;
      flex-direction: column;
      width: 55%;
    }

    &--bottom {
      display: flex;
      justify-content: center;
      margin-top: 1.5rem;
    }
  }
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
</style>
