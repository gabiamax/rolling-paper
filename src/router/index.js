import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/HomePage.vue'),
  },
  { path: '/comment', nane: 'Comment', component: () => import('./pages/CommentPage.vue') },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('./pages/NotFoundPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
