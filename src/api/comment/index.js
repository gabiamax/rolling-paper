import gaxios from '@/utils/axios';

export const getComment = () => {
  return gaxios.get('/avatars?populate=comments');
};
