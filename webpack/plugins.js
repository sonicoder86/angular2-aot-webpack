'use strict';

const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = [
  new webpack.ProgressPlugin(),
  new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)@angular/,
    path.join(process.cwd(), 'src')
  ),
  new CopyWebpackPlugin([
    { from: 'index.html' },
    { from: 'favicon.ico' }
  ]),
  new ExtractTextPlugin('style.bundle.css')
];
