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
        loader: 'ts',
        query: {
          configFileName: 'tsconfig.json'
        }
      }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'app') ],
    extensions: ['', '.ts', '.js']
  },

  devtool: false
};
