const getters = {
  baseUrl: (state, getters, rootState, rootGetters) => rootState.ConfigModule.baseUrl,

  singlePages: state => state.singlePages,

  pagesContents: state => state.pagesContents,

  pagesContentsAreFetched: state => Object.keys(state.pagesContents).length > 0,

  updatingDone: state => state.editingRequest.done,

  updatingErrors: state => state.editingRequest.errors,
};

export default getters;
