var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.static(__dirname));

app.listen(8080);

console.log('Server started at http://localhost:8080');
