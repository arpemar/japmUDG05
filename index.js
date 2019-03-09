var express = require('express');
var socket = require('socket.io');

//APP SETUP:
var app = express();
var server = app.listen(4000, function () {
    console.log('listening on requests on port 4000');
});

//STATIC FILES:
app.use(express.static('public') );

//SOCKET SETUP::
var io = socket(server);
io.on('connection', function (socket) {

    console.log('made socket conection : ' , socket.id);
    
    socket.on('chat',function (data) {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    });
});