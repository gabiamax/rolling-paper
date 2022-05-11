import Vue from 'vue';
import Toast from 'vue-toastification';
import '@/assets/scss/components/_index.scss';
import 'vue-toastification/dist/index.css';

const options = {
  transition: 'Vue-Toastification__fade',
  position: 'bottom-center',
  timeout: 3000,
};

Vue.use(Toast, options, { containerClassName: 'toast' });
