var http = require("http");
var sleep = require("system-sleep");
var os = require("os");

http.createServer(function(request, response) {
    sleep(1);
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end("Swarm service (Node app), hostname = Thinh Nguyen" );
}).listen(8085);

console.log("Node app, port 8085, hostname = Thinh Nguyen");