/*
TODO:
  * Check for wrong values in mutations and log errors with tips
*/

import mutationTypes from './mutationTypes';

const mutations = {
  // SET AJAX BASE ENDPOINT (http://mydomain-com or http://localhost:4000 ...)
  [mutationTypes.setBaseUrl] (state, baseUrl) {
    state.baseUrl = baseUrl;
  },

  // SET THE CONFIG ENDPOINT (defaults to /admin-config)
  [mutationTypes.setConfigEndpoint] (state, configEndpoint) {
    state.configEndpoint = configEndpoint;
  },

  // SET THE LOGIN ENDPOINT (defaults to /login)
  [mutationTypes.setLoginEndpoint] (state, loginEndpoint) {
    state.loginEndpoint = loginEndpoint;
  },

  // SET THE UPLOAD ENDPOINT (defaults to /uploads)
  [mutationTypes.setUploadEndpoint] (state, uploadEndpoint) {
    state.uploadEndpoint = uploadEndpoint;
  },

  // SET THE CONFIG FETCH STATUS
  [mutationTypes.setConfigFetchStatus] (state, status) {
    state.configFetched = status;
  },

  // SET THE LOCALE
  [mutationTypes.setLocale] (state, locale) {
    state.locale = locale;
  }

};

export default mutations;