const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(
    webpackMiddleware(
      webpack(webpackConfig)
    )
  );
}

app.listen(3050, () => console.log('listening'));
