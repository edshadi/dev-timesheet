var webpack = require('webpack');
var path = require('path');
var nodeModulesDir = path.join(__dirname, 'node_modules');
var WebpackNotifierPlugin = require('webpack-notifier');

require('babel-preset-es2015')
require('babel-preset-react')

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/app.jsx',
  ],
  output: {
    filename: 'app.js',
    path: path.resolve('./build'),
    publicPath: '/build/',
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval',
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: [nodeModulesDir],
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png$/, loader: 'url-loader?limit=100000' },
      { test: /\.jpg$/, loader: 'file-loader' },
    ],
  },
};

module.exports = config;
