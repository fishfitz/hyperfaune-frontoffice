import Cookies from 'js-cookie';
import { set } from '../utils/token';

export default function ({ $axios, store, redirect }) {
  $axios.interceptors.response.use(null, async (error) => {
    if (error.config && error.response && error.response.status === 401) {
      const tokenCookie = JSON.parse(Cookies.get('token'));
      const { token } = await $axios.$post('/api/auth/refresh', { refresh_token: tokenCookie.refreshToken });
      set($axios, { ...tokenCookie, token });
      error.config.headers.Authorization = `Bearer ${token}`;
      return $axios.request(error.config);
    }

    if (error.config && error.response && error.response.status === 403 && store.state.user) {
      await store.dispatch('LOGOUT');
      return redirect('/');
    }

    throw error;
  });
}
