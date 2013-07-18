var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

// Use public as place to find static files
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
   //fs.readFile('index.html', function (err, data) {
  fs.readFile(__dirname + '/public/index.html', function (err, data) {
		if (err) throw err;
		//console.log(data);
		response.send(data.toString());
  });

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

