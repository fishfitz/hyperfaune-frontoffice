import Vue from 'vue';

Vue.mixin({
  data() {
    return { loading$: false };
  },
  methods: {
    async $request(request, onSuccess, onError, isGlobal = false) {
      if (isGlobal) this.$store.commit('SET_LOADING', true);
      else this.loading$ = true;

      try {
        const data = typeof request === 'function' ? await request() : await request;
        if (isGlobal) this.$store.commit('SET_LOADING', false);
        else this.loading$ = false;
        if (onSuccess) onSuccess(data);
        else return data;
      }
      catch (e) {
        console.error(e);
        this.$toast.open({
          duration: 5000,
          message: e.response && e.response.data && this.$t(e.response.data.split(':')[0]) || 'Une erreur est survenue.',
          type: 'is-danger'
        });
        if (isGlobal) this.$store.commit('SET_LOADING', false);
        else this.loading$ = false;
        if (onError) onError(e);
      }
    }
  }
});
