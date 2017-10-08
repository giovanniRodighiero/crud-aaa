import Vue from 'vue';
import Vuex from 'vuex';

import ConfigModule from './modules/Config';
import SinglePagesModule from './modules/SinglePages';
import LoginModule from './modules/Login';

import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ConfigModule,
    SinglePagesModule,
    LoginModule
  },
  actions
});

export default store;