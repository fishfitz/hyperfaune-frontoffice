<template>
  <nav class="navbar box is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link to="/" class="logo">
        <img src="~assets/images/hyperfaune.png"/>
      </nuxt-link>
    </div>

    <div class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/website">
          <b-icon icon="laptop-chromebook"/>
          &nbsp;&nbsp;
          Aller sur votre site
        </nuxt-link>
        <nuxt-link class="navbar-item" to="/website">
          <b-icon icon="account-tie"/>
          &nbsp;&nbsp;
          Mon compte
        </nuxt-link>
        <a @click="logout" class="navbar-item">
          <b-icon icon="power"/>
          &nbsp;
          Se déconnecter
        </a>
      </div>
    </div>
  </nav>
</template>

<script>

  export default {
    computed: {
      activeUser() {
        return this.$store.state.user;
      }
    },
    methods: {
      async logout() {
        await this.$store.dispatch('LOGOUT');
        this.$router.push('/login');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  $outline-color: $dark;

  .navbar {
    padding-left: 2.1em;
    padding-right: 4em;

    img {
      margin-top: 6px;
      margin-left: 120px;
      margin-right: 120px;
      max-height: calc(3.25rem - 8px);
      border-bottom: 1px solid transparent;
    }

    a:hover {
      text-decoration: none;
    }

    .logo.nuxt-link-exact-active img {
      border-bottom-color: $link;
    }
  }
</style>
