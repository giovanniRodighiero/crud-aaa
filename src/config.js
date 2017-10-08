const configVue = (Vue, router) => {

  Vue.axios.defaults.baseURL = 'http://localhost:3000';

  Vue.axios.defaults.headers = {
    'Content-Type': 'application/json'
  };

  // ──────────────────────────────────────────────────────────────────────────── I ──────────
  //   :::::: A X I O S   I N T E R C E P T O R S : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────────────────────────────


  // ─── REQUEST ────────────────────────────────────────────────────────────────────
  Vue.axios.interceptors.request.use(function (config) {
    if (localStorage.getItem('crudaaa'))
      config.headers['Authentication'] = 'Bearer ' + window.localStorage.getItem('crudaaa');
    else
      delete config.headers['Authentication'];
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


  // ─── RESPONSE ───────────────────────────────────────────────────────────────────
  Vue.axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response && error.response.status === 401)
      router.push({ name: 'login' });
    return Promise.reject(error);
  });

  Vue.config.productionTip = false;
};

export default configVue;