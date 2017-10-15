import Vue from 'vue';

import mutationTypes from './mutationTypes';

const actions = {

  submitLogin ({ commit, getters}, payload) {
    return new Promise(async (resolve, reject) => {
      try {
        commit(mutationTypes.setRequestStatus, { isFetching: true });
        const result = await Vue.axios.post(getters.loginEndpoint, payload);
        commit(mutationTypes.setRequestStatus, { data: result.data });
        commit(mutationTypes.setLoggedIn, true);
        return resolve(result.data);
      } catch (errors) {
        commit(mutationTypes.setRequestStatus, { errors: errors.response.data });
        commit(mutationTypes.setLoggedIn, false);
        return reject(errors.response);
      }
    });
  },

  logout ({ commit }) {
    commit(mutationTypes.setLoggedIn, false);
    window.localStorage.removeItem('crudaaa');
  }

};

export default actions;