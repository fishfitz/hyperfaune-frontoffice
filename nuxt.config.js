require('dotenv').config();

module.exports = {
  head: {
    title: `${process.env.APP_NAME} Dashboard`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: `${process.env.APP_NAME} Dashboard` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: process.env.FAVICON },
      { rel: 'stylesheet', href: '//cdn.materialdesignicons.com/3.3.92/css/materialdesignicons.min.css' }
    ]
  },
  css: [
    '~assets/css/main.scss',
    '~assets/css/transitions.scss'
  ],
  plugins: [
    '~plugins/axios',
    '~plugins/getJwt',
    '~plugins/getConfig',
    '~plugins/getUser',
    '~plugins/vue-i18n',
    '~plugins/buefy',
    '~plugins/request',
    '~plugins/vcharts-theme',
    '~plugins/observe-visibility'
  ],
  build: {
    extractCSS: true,
    postcss: { plugins: { 'postcss-custom-properties': false } },
    extend(config) {
      config.module.rules
        .filter(r => r.test.test('.scss'))
        .forEach(r => r.oneOf.forEach(l => (l.use
          .filter(l => l.loader === 'sass-loader')
          .forEach((u) => {
            if (u.options) u.options.data = `$env-primary: ${process.env.PRIMARY};`;
          }))));
    }
  },
  render: { bundleRenderer: { directives: { t: require('vue-i18n-extensions').directive } } },
  proxy: {},
  modules: [
    ['nuxt-env', {
      keys: [
        'APP_NAME',
        'FAVICON',
        'LOGO',
        'OPTIONS'
      ]
    }],
    '~/modules/proxy',
    '@nuxtjs/proxy',
    '@nuxtjs/axios'
  ],
  serverMiddleware: [
    require('cookie-parser')()
  ],
  router: { linkActiveClass: 'is-active' },
  transition: 'slide-fade',
  axios: { proxy: true }
};
