var fs = require('fs');
var buffer  = new Buffer(fs.readFileSync('index.html'));
//console.log(buffer.toString());

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
  //response.send('Hello World 2!');
//var buffer  = new Buffer((fs.readFilesync('index.html'));
//console.log(buffer);
//fs.readFileSync('index.html')
//buf.toString([encoding], [start], [end])
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
