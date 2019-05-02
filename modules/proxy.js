module.exports = function nuxtProxy() {
  this.options.proxy = {
    '/configs': process.env.API_URL,
    '/api/**': process.env.API_URL
  };
};
