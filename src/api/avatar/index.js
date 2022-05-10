import gaxios from '@/api/config/instance';

const AVATAR_URL = '/avatars';

export const getAvatars = () =>
  gaxios
    .get(AVATAR_URL)
    .then(({ data }) => {
      return data.data;
    })
    .catch((err) => console.log(err));
