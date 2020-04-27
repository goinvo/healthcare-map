const express = require('express'),
	app = express(),
	bodyParser = require("body-parser");

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/mockSubmission", function(req, res) {
	res.json(req.body);
});

const server = app.listen(1337, () => {
  var host = LOCAL_IP(),
  	port = server.address().port;

  console.log(`Site listening at http://${host}:${port} or http://localhost:${port}`);
});

const LOCAL_IP = () => {
	var interfaces = require("os").networkInterfaces();

	for(var i in interfaces){
		for(var k in interfaces[i]){
			var address = interfaces[i][k];

			if(address.family === "IPv4" && !address.internal){
				return address.address;
			}
		}
	}
};
