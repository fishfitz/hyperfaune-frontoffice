<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-5 is-offset-4">
          <div class="box">
            <img class="logo" :src="$env.LOGO"/>
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .box {
    padding-bottom: 10px;
  }

  .logo {
    height: 50px;
  }
</style>
