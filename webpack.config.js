'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: require('./webpack/entry'),

  context: path.join(process.cwd(), 'src'),

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins'),

  resolve: require('./webpack/resolve'),

  stats: 'errors-only',

  devtool: 'source-map'
};
