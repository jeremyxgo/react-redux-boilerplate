/**
 * Configure Webpack for each environment by using this example file.
 * Name the config file to "webpack.config.dev.js" for development
 * and "webpack.config.prod.js" for production.
 */

var cfg = {
  // Path to place output files
  dist: './dist',
  
  // Url to reference output files
  publicPath: '',

  // Host address and port number for Webpack dev server
  webpackDevServerHost: '0.0.0.0',
  webpackDevServerPort: 3001,
};

module.exports = cfg;