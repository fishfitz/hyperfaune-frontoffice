<template>
  <div>
    <top-bar/>
    <div>
      <b-loading :active="loading"/>
      <div class="columns">
        <div class="column is-2">
          <left-bar/>
        </div>
        <div class="column">
          <div class="container">
            <div class="section">
              <nuxt/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '../components/bars/top-bar.vue';
  import LeftBar from '../components/bars/left-bar.vue';

  export default {
    components: { TopBar, LeftBar },
    middleware: 'authenticated',
    computed: {
      loading() {
        return this.$store.state.loading;
      }
    },
    async mounted() {
      if (!this.$store.state.user || this.$store.state.user.access_level < 1) {
        this.$dialog.alert({
          title: this.$t('NOT_AUTHORIZED'),
          message: this.$t('YOU_MUST_BE_ADMIN'),
          type: 'is-danger',
          hasIcon: true,
          icon: 'alert-circle-outline',
          canCancel: false,
          onConfirm: async () => {
            await this.$store.dispatch('LOGOUT');
            this.$router.replace('/login');
          }
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .section {
    padding-top: 0;
    width: 90%;
  }
</style>
