export const beforeEach = async ({ store, to, from, next }) => {
  if (!store.getters['ConfigModule/isConfigAlreadyFetched'] && to.name != 'login') {
    await store.dispatch('ConfigModule/setConfig');
    return next();
  }
  return next();
};
