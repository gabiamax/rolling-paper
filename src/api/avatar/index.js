import gaxios from '@/utils/axios';

export const getAvatar = (id) => {
  return gaxios.get(`/avatars/${id}`);
};

export const postAvatar = (data) => {
  return gaxios.post('/avatars', { data });
};
