'use strict';
let webpack = require('webpack');

module.exports = {
  entry: {
    'bootstrap.prod': './src/app/bootstrap.ts',
    'bootstrap.aot.prod': './src/app/bootstrap.aot.ts',
  },

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins').concat([
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    })
  ]),

  resolve: require('./webpack/resolve'),

  devtool: 'source-map'
};
