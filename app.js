var express = require('express');
var jsonServer = require('json-server');

var server = express();
// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults()); 
server.use( jsonServer.router('db.json'));

server.listen(3000, () => {
    console.log("Server running on port 3000");
   });