<template>
  <article class="page-box column is-one-quarter">
    <nuxt-link :to="link" class="page-link">
      <h2 class="title is-6">
        <b-icon :icon="icon"/> {{ title }}
      </h2>
      <small class="content">
        <slot/>
      </small>
    </nuxt-link>
  </article>
</template>

<script>
  export default {
    props: ['title', 'icon', 'link']
  };
</script>

<style lang="scss" scoped>
  @import "~assets/css/main.scss";

  .page-box {
    padding-left: 20px;
    padding-right: 20px;

    &:not(:first-child) {
      border-left: 1px dashed $border;
    }
  }



  h2.title.is-6 {
    margin-bottom: .5em;
    font-weight: normal;
    transform: translateY(-2px);
  }

  .content {
    font-size: 8.5pt;
    line-height: 105%;
    display: block;
  }

  .icon {
    margin-left: -5px;
    margin-right: 2px;
    transform: translateY(2px);
  }

  a.page-link {
    color: $text;
  }

  a.page-link:hover {
    text-decoration: none;

    .title {
      color: $link;
    }
  }
</style>
