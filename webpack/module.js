'use strict';

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      use: ['@ngtools/webpack'] // same as ['awesome-typescript', 'angular2-template']
    },
    {
      test: /\.html$/,
      use: 'raw'
    },
    {
      test: /\.css$/,
      loaders: ['to-string-loader', 'css-loader']
    }
  ]
};
