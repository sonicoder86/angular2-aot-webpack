'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    'bootstrap': './app/bootstrap.ts',
    'bootstrap.aot': './app/bootstrap.aot.ts',
  },

  context: path.join(process.cwd(), 'src'),

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins'),

  resolve: require('./webpack/resolve'),

  devtool: 'source-map'
};
