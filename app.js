var express = require('express');
var favicon = require('serve-favicon');
var http = require('http');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.set('port', 3000);
app.set('views', __dirname);
app.set('view engine', 'hbs');

var server = http.createServer(app);

server.listen(3000);

app.get('/', function(req, res, next) {
    res.render('card');
});
