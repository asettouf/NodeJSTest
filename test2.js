var http = require("http");

var req = http.request({
	hostname: "localhost",
	port: 8000,
	method: "PUT",
	path:"/dTest"
	}, function(response){
		response.on("data", function(chunk){
			console.log(chunk.toString());
		});
	});
req.end();