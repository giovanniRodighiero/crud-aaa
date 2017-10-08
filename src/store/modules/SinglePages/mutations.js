import mutationTypes from './mutationTypes';

const mutations = {
  // SETS THE ARRAY OF PAGES OF TYPE 'singlePages'
  [mutationTypes.setSinglePages] (state, singlePages) {
    state.singlePages = singlePages;
  },

  // ADDS NEW PAGE'S CONTENTS OR OVERWRITES THE EXISTING ONES
  [mutationTypes.addPageContents] (state, { name, contents }) {
    state.pagesContents = {
      ...state.pagesContents,
      [name]: contents
    };
  },

  // SET THE STATUS OF THE PAGE EDITING REQUEST
  [mutationTypes.updatePage] (state, { done, errors = null }) {
    state.editingRequest = {
      done,
      errors
    };
  }
};

export default mutations;