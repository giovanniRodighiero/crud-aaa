import Vue from 'vue';

import configModule_mutationTypes from './mutationTypes';
import singlePagesModule_mutationTypes from '../SinglePages/mutationTypes';

const actions = {

  // FETCH THE CONFIG FILE AND SET THE INFO IN THE RIGHT PLACES
  setConfig ({ commit, getters }) {
    if (!getters.fullConfigEndpoint)
      return;
    return new Promise(async (resolve, reject) => {
      try {
        const configObject = await Vue.axios.get(getters.fullConfigEndpoint);
        const { global, singlePages } = configObject.data;
        commit(configModule_mutationTypes.setConfigFetchStatus, true);
        commit(configModule_mutationTypes.setUploadEndpoint, global.uploadEndpoint);
        commit(`SinglePagesModule/${singlePagesModule_mutationTypes.setSinglePages}`, singlePages, { root: true });
        return resolve();
      } catch (error) {
        console.error('config module / setConfig(): ', error);
        return resolve();
      }
    });
  },

  // APP INITIAL SET-UP
  initialSetup: ({ commit, dispatch }, options) => new Promise(async (resolve, reject) => {
    commit(configModule_mutationTypes.setBaseUrl, options.baseUrl);
    commit(configModule_mutationTypes.setConfigEndpoint, options.configEndpoint);
    commit(configModule_mutationTypes.setLoginEndpoint, options.loginEndpoint);
    await dispatch('setConfig');
    return resolve();
  }),

  // SET LOCALE PROXY ACTION
  setLocale: ({ commit }, locale) => {
    commit(configModule_mutationTypes.setLocale, locale);
  }

};

export default actions;