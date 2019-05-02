import { set, remove } from '../utils/token';

export const state = () => ({
  user: null,
  config: {},
  loading: false,
  dragCategory: false
});

export const mutations = {
  BOOTSTRAP(state) {
    state.options = new Set((this.$env.OPTIONS || '').split(','));
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_CONFIG(state, config) {
    state.config = config;
    state.dataLang = config.default_lang;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },

  SET_DRAG_CATEGORY(state, drag) {
    state.dragCategory = drag;
  }
};

export const actions = {
  async LOGIN({ dispatch }, { login, email, password }) {
    const token = await this.$axios.$post('/api/auth/login', { login, email, password });
    await dispatch('LOGIN_WITH_TOKEN', token);
  },
  async LOGIN_WITH_TOKEN({ commit }, { res, ...token }) {
    set(this.$axios, token, res);
    const user = await this.$axios.$get('/api/auth/user');
    commit('SET_USER', user);
  },
  async LOGOUT({ commit }) {
    await this.$axios.$post('/api/auth/logout');
    commit('SET_USER', null);
    remove();
  }
};
