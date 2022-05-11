import gaxios from '@/api/config/axios';

const avatarApi = {
  getAvatars: () => gaxios.get('/avatars'),
  getCertainUser: ({ id }) => gaxios.get(`/avatars/${id}?populate=comments`),
};

export default avatarApi;
