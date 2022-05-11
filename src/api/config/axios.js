// 공통 axios 설정 관련
import axios from 'axios';

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
    return Promise.reject(error);
  },
);

export default gaxios;
