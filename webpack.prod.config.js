'use strict';
let webpack = require('webpack');
let path = require('path');

module.exports = {
  entry: {
    'bootstrap.prod': './app/bootstrap.ts',
    'bootstrap.aot.prod': './app/bootstrap.aot.ts',
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

  plugins: [
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
      sourceMap: false
    })
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.js']
  },

  devtool: false
};
