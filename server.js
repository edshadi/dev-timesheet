/* eslint-disable no-console */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true,
  },
}).listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Listening at 0.0.0.0:3000');
});
