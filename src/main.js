import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/scss/styles.scss';
import '@/plugin/toast';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
