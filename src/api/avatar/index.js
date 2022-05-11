import gaxios from '@/api/config/axios';

const AVATAR_URL = '/avatars';

export const getAvatars = () =>
  gaxios
    .get(AVATAR_URL)
    .then(({ data }) => {
      return data.data;
    })
    .catch((err) => console.log(err));
// AVATAR_URL 상수 사용
export const getAvatar = (id) => {
  return gaxios.get(`/avatars/${id}`);
};

export const getCertainAvatarInfo = (id) => {
  return gaxios.get(`/avatars/${id}?populate=comments`);
};
