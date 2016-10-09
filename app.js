
var express = require("express");
var app = express();
app.use(express.static("public"));

app.get("/standings", function(req, res) {

	var callback = function(standings) {
		console.log("Request for standings complete.");
		res.setHeader('Content-Type', 'application/json');
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.send(JSON.stringify(standings));
	};
	var errorHandler = function(data) {
		throw data;	
	}
	console.log("Request for standings issued.");
	var badTeams = require("./badTeams");
	badTeams.beginGetStandings(callback, errorHandler);
});

var envPort = process.env.PORT || 3000;

var server = app.listen(envPort, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port);
});
