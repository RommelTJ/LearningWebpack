const express = require('express');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config');
  app.use(
    webpackMiddleware(
      webpack(webpackConfig)
    )
  );
}

app.listen(3050, () => console.log('listening'));
