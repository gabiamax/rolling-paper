import axios from 'axios';

const BASE_URL = 'https://rolling-paper-api.herokuapp.com/api';
const AVATAR_URL = '/avatars';

axios.defaults.baseURL = BASE_URL + AVATAR_URL;

export const getAvatars = () =>
  axios
    .get()
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
