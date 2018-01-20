var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV;
var cfg;

switch (NODE_ENV) {
  case 'development':
    cfg = require('./webpack.config.dev.js');
    break;
  case 'production':
    cfg = require('./webpack.config.prod.js');
    break;
}

var appName = 'react-spa-boilerplate';
var appScriptDir = 'scripts';

var config = {
  entry: [
    'babel-polyfill',
    './src',
  ],
  output: {
    path: path.join(__dirname, cfg.dist),
    publicPath: cfg.publicPath,
    filename: `${appScriptDir}/${appName}.js`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};

if (NODE_ENV === 'development') {
  config.devtool = 'eval';
  config.entry.unshift('react-hot-loader/patch');
  config.plugins.push(new webpack.NamedModulesPlugin());
  config.plugins.push(new webpack.NoEmitOnErrorsPlugin());
  config.devServer = {
    host: cfg.webpackDevServerHost,
    port: cfg.webpackDevServerPort,
    publicPath: cfg.publicPath,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    },
    historyApiFallback: true,
  }
}

module.exports = config;
