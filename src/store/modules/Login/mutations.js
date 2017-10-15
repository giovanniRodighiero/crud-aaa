import mutationTypes from './mutationTypes';

const mutations = {

  // SETS THE LOGIN STATUS TO TRUE OR FALSE
  [mutationTypes.setLoggedIn] (state, status) {
    state.loggedIn = status;
  },

  // SETS THE REQUEST STATUS AND POSSIBLE ERRORS
  [mutationTypes.setRequestStatus] (state, { isFetching = false, data = false, errors = false }) {
    state.request.isFetching = isFetching;
    state.request.errors = errors;
    state.request.data = data;
  }

};

export default mutations;