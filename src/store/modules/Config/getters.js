const getters = {

  // GET THE FULL ENDPOINT FOR THE MAIN CONFIG OBJECT
  fullConfigEndpoint: state =>  !!state.baseUrl ? `${state.baseUrl}${state.configEndpoint}` : false,

  // GET THE FULL UPLOAD ENDPOINT
  fullUploadEndpoint: state => {
      if (!state.uploadEndpoint)
        return false;
      return `${state.baseUrl}${state.uploadEndpoint}`
  },

  // STATE PROXY
  isConfigAlreadyFetched: state => state.configFetched,

};

export default getters;