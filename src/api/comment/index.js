import gaxios from '@/utils/axios';

export const getComments = () => {
  return gaxios.get('/avatars?populate=comments');
};
