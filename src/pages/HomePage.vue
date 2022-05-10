<template>
  <div>
    <Header />
    <AvatarsList :avatars="avatars" />
  </div>
</template>

<script>
import AvatarsList from '@/components/AvatarsList.vue';
import Header from '@/components/Header.vue';
// import { getAvatars } from '@/api/avatar';

export default {
  components: { AvatarsList, Header },
  data() {
    return {
      avatars: [],
    };
  },
  async created() {
    //! px 가공하여 넣기!
    this.avatars = await this.fetchAvatars();
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
            //! 데이터는 Number
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
