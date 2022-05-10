import gaxios from '@/utils/axios';

export const getAvatar = (id) => {
  return gaxios.get(`/avatars/${id}`);
};
