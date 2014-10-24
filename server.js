var fs = require('fs');
var edge = require('edge');
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 8080
    });

// native image loader
var nativeImageLoader = edge.func(require('path').join(__dirname, 'nativeImageLoader.cs'));
// read an image
/*fs.readFile('Capture.jpg', function(err, data) {
  image = data;
  console.log(image.length);
});
*/
// send an image once a client connected
console.log("Waiting for connection...");
wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log('Received: %s', message);
        nativeImageLoader('load', function(error, result) {
            if (error) throw error;
            ws.send(result); // send the captured image
        });
    });
});