import gaxios from '@/utils/axios';

const avatarApi = {
  getAvatar: (id) => gaxios.get(`/avatars/${id}`),
  getCertainAvatarInfo: (id) => gaxios.get(`/avatars/${id}?populate=comments`),
};

export default avatarApi;
