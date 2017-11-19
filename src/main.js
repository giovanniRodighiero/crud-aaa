import '../node_modules/flexboxgrid/dist/flexboxgrid.min.css';

import Vue from 'vue';
import App from './App';

import initVueConfig from './config';
import store from './store';
import router from './router';

const { i18n } = initVueConfig(Vue);

/* eslint-disable no-new */
const test = new Vue({
  el: '#crud-aaa',
  router,
  store,
  i18n,
  // template: '<App/>',
  components: { CrudAaa: App }
});
