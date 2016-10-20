'use strict';
let path = require('path');
let webpack = require('webpack');

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
    rules: [
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript?tsconfig=tsconfig.json',
          'angular2-template'
        ]
      },
      {
        test: /\.html$/,
        use: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.join(process.cwd(), 'app')
    )
  ],

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app')
    ],
    extensions: ['.ts', '.js']
  },

  devtool: 'source-map'
};
