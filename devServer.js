var express = require('express');
var cors = require('cors');
var request = require('request');
var app = express();

// app.use(cors()); //enable all CORS requests
app.use(express.static(__dirname));

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

app.listen(8080, function() {
  console.log('Server started at http://localhost:8080');
});
