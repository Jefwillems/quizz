const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  outputDir: './docs',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    plugins: [new VuetifyLoaderPlugin()],
  },
};
