var express = require('express'); //https://github.com/heroku/node-js-getting-started/blob/master/index.js
var cors = require('cors');
var request = require('request');
var app = express();

app.set('port', (process.env.PORT || 5000));

// app.use(cors()); //enable all CORS requests
app.use(express.static(__dirname)); // app.use(express.static(__dirname + '/public'));

// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

app.get('/', function(req, res) { //request, response
  resonse.render('index.html');
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
