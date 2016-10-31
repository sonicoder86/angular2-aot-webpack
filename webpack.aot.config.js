'use strict';
let path = require('path');
let ngtools = require('@ngtools/webpack');

module.exports = {
  entry: {
    'bootstrap.aot': './src/app/bootstrap.aot.ts',
  },

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins').concat([
    new ngtools.AotPlugin({
      tsConfigPath: './tsconfig.aot.json',
      baseDir: process.cwd(),
      entryModule: path.join(process.cwd(), 'src', 'app', 'main') + '#MainModule'
    })
  ]),

  resolve: require('./webpack/resolve'),

  devtool: 'source-map'
};
