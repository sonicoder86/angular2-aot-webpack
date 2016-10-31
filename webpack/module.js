'use strict';

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      use: [
        'awesome-typescript',
        'angular2-template'
      ]
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
