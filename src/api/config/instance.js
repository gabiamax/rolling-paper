// 공통 axios 설정 관련
import axios from 'axios';

const baseURL = 'https://rolling-paper-api.herokuapp.com/api';
const gaxios = axios.create({
  baseURL,
  headers: {
    'content-Type': 'application/json',
  },
});

export default gaxios;
