import axios from 'axios';
import VueAxios from 'vue-axios';
import VueI18n from 'vue-i18n';
import VeeValidate from 'vee-validate';

import router from './router';
import { messages, veeMessages } from './i18n';


// ──────────────────────────────────────────────────────────────── I ──────────
//   :::::: A X I O S   C O N F I G : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
const configAxios = Vue => {
  Vue.use(VueAxios, axios);

  // ─── BASE CONFIG ────────────────────────────────────────────────────────────────
  Vue.axios.defaults.baseURL = 'http://localhost:3000';
  Vue.axios.defaults.headers = {
    'Content-Type': 'application/json'
  };

  // ─── REQUEST INTERCEPTORS ──────────────────────────────────────────────────────────────────
  Vue.axios.interceptors.request.use(function (config) {
    if (localStorage.getItem('crudaaa'))
      config.headers['Authentication'] = 'Bearer ' + window.localStorage.getItem('crudaaa');
    else
      delete config.headers['Authentication'];
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  // ─── RESPONSE INTERCEPTORS ──────────────────────────────────────────────────────────────────
  Vue.axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response && error.response.status === 401)
      router.push({ name: 'login' });
    return Promise.reject(error);
  });
};


// ────────────────────────────────────────────────────────────── II ──────────
//   :::::: G L O B A L   I 1 8 N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────
const i18nConfig = Vue => {
  Vue.use(VueI18n);

  const i18n = new VueI18n({
    locale: 'en',
    messages,
  });

  return i18n;
};


// ────────────────────────────────────────────────────────────────────────────── III ──────────
//   :::::: V A L I D A T I O N   M E S S A G E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────
const veeValidationConfig = Vue => {
  Vue.use(VeeValidate, {
    locale: 'en',
    dictionary: {
      it: {
        messages: veeMessages
      }
    }
  });
};


const configVue = Vue => {
  configAxios(Vue);
  veeValidationConfig(Vue);
  const i18n = i18nConfig(Vue);
  Vue.config.productionTip = false;
  return { i18n };
};

export default configVue;