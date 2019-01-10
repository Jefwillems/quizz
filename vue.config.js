const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  outputDir: './docs',
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()],
  },
};
