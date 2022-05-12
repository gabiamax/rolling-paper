<template>
  <div id="app">
    <keep-alive include="'', /">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue';
import AjaxWithErrorHandler from '@/plugin/AjaxWithErrorHandler';

Vue.use(AjaxWithErrorHandler);

export default {
  name: 'App',
  components: {},
};
</script>

<style></style>
