'use strict';
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
io.on('connection', (socket) => {
  console.log('The user is connected');
  socket.on('disconnect', function(){
    console.log('The user is disconnected');
  });
   socket.on('add-message', (message) => {
   // io.emit('message', {type:'new-message', text: message});
   console.log(message); 
   dfgdfgd  
  });
});
http.listen(5000, () => {
  console.log('started on port 5000');
});