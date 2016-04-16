//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
var port = process.env.PORT || 8080;
var host   = process.env.HOSTNAME || 'localhost';

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('My Node App v-1.0 !! Server : ' + host);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(port, function(){
    console.log("Server listening on: http://%s:%s", host, port);
});
