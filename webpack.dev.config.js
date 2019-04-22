const webpack = require('webpack');
const makeWebpack = require('basewebpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = makeWebpack({
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    extensions: ['.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    port: 8082
  }
});
