'use strict';
let path = require('path');

module.exports = {
  entry: {
    'bootstrap': './app/bootstrap.ts',
    'bootstrap.aot': './app/bootstrap.aot.ts',
  },

  output: {
    path: './dist',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript?tsconfig=tsconfig.json',
          'angular2-template'
        ]
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.js']
  },

  devtool: false
};
