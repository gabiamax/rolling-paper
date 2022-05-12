import gaxios from '@/api/config/axios';

const commentApi = {
  getComments: () => gaxios.get('/avatars?populate=comments'),
  postComment: ({ data }) => gaxios.post('/comments', { data }),
  deleteComment: ({ id }) => gaxios.delete(`/comments/${id}`),
};

export default commentApi;
