var express = require ('express');
var app = express ();
var path = require ('path');
var http = require ('http');

app.listen(process.env.PORT || 3000, function() {
    console.log ("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/scripts'));
app.use(express.static(__dirname + '/styles'));

app.use (function (req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){ 
    res.sendFile(path.join(__dirname + '/index.html'));
});