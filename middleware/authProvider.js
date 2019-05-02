export default async function ({ store, query, redirect, res }) {
  await store.dispatch('LOGIN_WITH_TOKEN', {
    type: decodeURIComponent(query.type),
    token: decodeURIComponent(query.token),
    refreshToken: decodeURIComponent(query.refreshToken),
    res
  });
  if (query) return redirect('/');
}
