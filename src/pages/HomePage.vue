<template>
  <div>
    <div>홈</div>
    <AvatarsList :avatars="avatars" />
  </div>
</template>

<script>
import AvatarsList from '@/components/AvatarsList.vue';
// import { getAvatars } from '@/api/avatar';

export default {
  components: { AvatarsList },
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
      //! 목업 지울 때 활성화하기
      // const avatars = await getAvatars();
      // return avatars;
      // Mock data
      return [
        {
          id: 3,
          attributes: {
            name: '류한경',
            description: '안녕하세요 류한경입니다.',
            createdAt: '2022-05-04T16:48:11.635Z',
            img_src: null,
          },
          positions: {
            top: '50px',
            left: '80px',
          },
        },
        {
          id: 2,
          attributes: { name: '김민석', description: '맥스 짱', createdAt: '2022-05-01T05:47:52.533Z', img_src: null },
          positions: {
            top: '0',
            left: '0',
          },
        },
      ];
    },
  },
};
</script>

<style></style>
