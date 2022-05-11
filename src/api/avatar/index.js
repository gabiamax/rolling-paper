import gaxios from '@/api/config/axios';

const avatarApi = {
  getAvatar: (id) => gaxios.get(`/avatars/${id}`),
  getAvatars: () => gaxios.get('/avatars'),
  getCertainAvatarInfo: (id) => gaxios.get(`/avatars/${id}?populate=comments`),
};

export default avatarApi;
