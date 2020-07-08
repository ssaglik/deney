var express = require('express');
var https = require('https');
var http = require('http');
var app = express();
var fs = require('fs');


var options = {
    key: fs.readFileSync('deney-key.pem'),
    cert: fs.readFileSync('deney-cert.pem')
}

var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

https.createServer(options, app).listen(443, function() {
    res.sendFile(path.join(__dirname + '/test1/index.html'));

});




app.listen(8080);