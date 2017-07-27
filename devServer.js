var express = require('express');
var cors = require('cors');
var request = require('request');
var app = express();

app.use(cors());
app.use(express.static(__dirname));

app.get('/', function(req, resp) {
  resp.render('index.html');
});

// API ---
var API_URL = 'https://store.steampowered.com/api';

app.get('/api/featuredcategories', function(req, resp) {
  req.pipe(request(API_URL + '/featuredcategories')).pipe(resp);
});

app.get('/api/appdetails/:appids', function(req, resp) {
  req.pipe(request(API_URL + '/appdetails?appids=' + req.params.appids)).pipe(resp);
});

app.listen(8080);

console.log('Server started at http://localhost:8080');
