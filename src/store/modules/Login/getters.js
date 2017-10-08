const getters = {

  loggedIn: state => state.loggedIn,

  loginEndpoint: (state, getters, rootState) => `${rootState['ConfigModule'].baseUrl}${rootState['ConfigModule'].loginEndpoint}`,

  isFetching: state => state.request.isFetching,

  _errors: state => state.request.errors,

  data: state => state.request.data
};

export default getters;