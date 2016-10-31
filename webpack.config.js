'use strict';
let webpack = require('webpack');

module.exports = {
  entry: {
    'bootstrap': './src/app/bootstrap.ts',
    'bootstrap.aot': './src/app/bootstrap.aot.ts',
  },

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins'),

  resolve: require('./webpack/resolve'),

  devtool: 'source-map'
};
