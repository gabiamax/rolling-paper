import axios from 'axios';
import Vue from 'vue';

const baseURL = 'https://rolling-paper-api.herokuapp.com/api';
const gaxios = axios.create({
  baseURL,
  headers: {
    'content-Type': 'application/json',
  },
});

gaxios.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

gaxios.interceptors.response.use(
  (response) => {
    if (response.data.error) {
      window.alert(response.data.error);
      return Promise.reject(response.data.error);
    }
    return response;
  },
  (error) => {
    if (error.response) {
      const {
        data: { message },
      } = error.response;
      Vue.$toast.error(message ?? '잘못된 요청입니다');
    }
    return Promise.reject(error);
  },
);

export default gaxios;
