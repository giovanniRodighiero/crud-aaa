// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';

import Vue from 'vue';
import App from './App';
import axios from 'axios';
import VueAxios from 'vue-axios';

import initVueConfig from './config';
import router from './router';
import store from './store';

Vue.use(VueAxios, axios);

initVueConfig(Vue, router);

/* eslint-disable no-new */
const test = new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  components: { App }
});
