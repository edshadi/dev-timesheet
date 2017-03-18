var webpack = require('webpack');
var path = require('path');
var nodeModulesDir = path.join(__dirname, 'node_modules');
var WebpackNotifierPlugin = require('webpack-notifier');

require("babel-preset-es2015")
require("babel-preset-react")

var config = {
  entry: {
    app: './src/app.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/js/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
  devtool: 'eval',
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel',
        exclude: [nodeModulesDir]
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" }
    ]
  }
};

module.exports = config;
