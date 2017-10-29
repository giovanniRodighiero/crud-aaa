import Vue from 'vue';

import mutationTypes from './mutationTypes';

const actions = {

  // FETCH CONTENTS OF A SINGLE PAGE GIVEN PAGENAME AND ENDPOINT
  fetchPageContents ({ commit, getters }, { name, endpoint }) {
    return new Promise(async (resolve, reject) => {
      try {
        const pageContents = await Vue.axios.get(`${getters.baseUrl}${endpoint}`);
        commit(mutationTypes.addPageContents, {
          name,
          contents: pageContents.data
        });
        return resolve(pageContents.data);
      } catch (error) {
        console.error(error);
        return reject(error);
      }
    })
  },

  // FETCH CONTENTS OF ALL PAGES
  async fetchAllPagesContents ({ commit, getters }) {
    try {
      // generate array of promises to get the contents from every page
      const requests = getters.singlePages.map( page => {
        // TODO: get contents only if there aren't already or they are marked as invalid (due to save)
        return Vue.axios.get(`${getters.baseUrl}${page.endpoint}`)
      });
      const contents = await Promise.all(requests);
      // for each page add an entry with pagename: contents format
      getters.singlePages.forEach(({ name }, index) => {
        commit(mutationTypes.addPageContents, {
          name,
          contents: contents[index].data
        });
      });
    } catch (error) {
      console.error(error);
    }
  },

  //
  async updatePage ({ commit, getters }, { page, payload }) {
    try {
      const response = await Vue.axios.put(`${getters.baseUrl}${page.endpoint}`, payload);
      commit(mutationTypes.updatePage, { done: true });
    } catch (errors) {
      console.errors('errors', errors.response)
      commit(mutationTypes.updatePage, { done: true, errors: errors.response });
    }
  }
};

export default actions;