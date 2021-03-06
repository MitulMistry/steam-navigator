var express = require('express'); //https://github.com/heroku/node-js-getting-started/blob/master/index.js
var cors = require('cors');
var request = require('request');
var app = express();

if (process.env.NODE_ENV !== 'production') { //check for development environment
  var webpack = require('webpack');
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var config = require('./webpack.dev.js');
  var compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.set('port', (process.env.PORT || 5000)); //gets port from environment or else defaults to 5000

// app.use(cors()); //enable all CORS requests
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) { //request, response
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
