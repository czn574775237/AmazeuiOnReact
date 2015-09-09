import 'babel/polyfill';

if (process.env.NODE_ENV !== 'production') {

  // Run webpack front-end server
  // ------------------------------------------------
  let webpack = require('webpack');
  let WebpackDevServer = require('webpack-dev-server');
  let config = require('./webpack.config');
  new WebpackDevServer(
    webpack(config),
    config.devServer
  ).listen(config.port, 'localhost', function (err) {
    if (err) {
      console.error(err);
    }
    console.log('Webpack dev server Listening at %s %s',
      'localhost', config.port);
  });

}
