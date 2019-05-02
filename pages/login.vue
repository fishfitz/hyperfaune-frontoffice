<template>
  <div>
    <h3 class="title has-text-grey"> Dashboard {{ $env.APP_NAME }} </h3>
    <p class="subtitle has-text-grey">
      <b-icon icon="lock-open" size="is-small"/>
      &nbsp;  <span v-t="'PLEASE_LOGIN'"/>
    </p>
    <form @submit.prevent="auth">
      <b-field>
        <b-input v-model="login" :placeholder="$t('LOGIN')" icon="login" size="is-medium"/>
      </b-field>
      <b-field>
        <b-input v-model="password" type="password" :placeholder="$t('PASSWORD')" icon="lock" size="is-medium" password-reveal/>
      </b-field>
      <a class="button is-block is-primary is-medium" :class="{'is-loading': loading$}" @click="auth" v-t="'LOGIN'" :disabled="!password || !login"/>
      <input type="submit" hidden/>
    </form>
    <hr/>
    <a href="/password/forgot" class="has-text-grey">
      <b-icon icon="lock-reset" size="is-small"/>
      <span v-t="'FORGOT_YOUR_PASSWORD'"/>
    </a>
  </div>
</template>

<script>

  export default {
    layout: 'central-box',
    middleware: 'anonymous',
    data() {
      return {
        login: '',
        password: ''
      };
    },
    methods: {
      auth() {
        if (!this.password || !this.login) return;
        this.$request(() => this.$store.dispatch('LOGIN', { login: this.login, password: this.password }), () => {
          this.$router.push('/dashboard');
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .facebook-button span {
    vertical-align: bottom;
  }
</style>
