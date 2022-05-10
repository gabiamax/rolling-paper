import gaxios from '@/api/config/instance';

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
