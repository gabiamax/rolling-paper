import gaxios from '@/api/config/axios';

const avatarApi = {
  getAvatars: () => gaxios.get('/avatars'),
  getCertainAvatarInfo: (id) => gaxios.get(`/avatars/${id}?populate=comments`),
  postAvatar: (data) => gaxios.post('/avatars', { data }),
  getCertainUser: ({ id }) => gaxios.get(`/avatars/${id}?populate=comments`),
};

export default avatarApi;
