var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,"public")));

var server = app.listen(3000, ()=> {
  console.log("Server started at port 3000");
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
  console.log('user connected');
  socket.on('chat', function(data) {
    io.emit('chat', data);
  });

  socket.on('disconnect', function() {
    io.emit('chat.message', 'User has disconnected.');
  });
});
