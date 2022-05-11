import gaxios from '@/api/config/axios';

export const getComments = () => {
  return gaxios.get('/avatars?populate=comments');
};
