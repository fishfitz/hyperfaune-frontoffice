export default async ({ app, store }) => {
  store.commit('BOOTSTRAP');
  const config = await app.$axios.$get('/configs?backoffice=true');
  store.commit('SET_CONFIG', config);
};
