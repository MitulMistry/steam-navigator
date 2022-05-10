// Using template for Node app on Heroku:
// https://github.com/heroku/node-js-getting-started/blob/main/index.js

const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();

// Check for development environment
if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.dev.js');
  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
}

// Get port from environment or else default to 5000
app.set('port', (process.env.PORT || 5000));

// Enable all CORS requests
// app.use(cors());

// Read files from this folder
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) { // request, response
  res.render('index.html');
});

// API ---
var API_URL = 'https://store.steampowered.com/api';

app.get('/api/featuredcategories', cors(), function(req, res) {
  req.pipe(request(API_URL + '/featuredcategories')).pipe(res);
});

app.get('/api/appdetails/:appids', cors(), function(req, res) {
  req.pipe(request(API_URL + '/appdetails?appids=' + req.params.appids)).pipe(res);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
