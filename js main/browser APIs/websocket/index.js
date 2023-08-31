// you have to run both files index.js  with nodejs and client.js on port 5500 and you can join as a clien by opening different tab by client tabs 

const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketIO = require('socket.io');

const io = socketIO(server, {
  cors: {
    origin: 'http://127.0.0.1:5500', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
});
const users = {};
io.on("connection", (socket) => {
  socket.on('new-user-connect',(name)=>{
    users[socket.id] = name;
    
    socket.broadcast.emit('user-joined',name);
  })

  socket.on('send',(message)=>{
    socket.broadcast.emit('receive',{message:message,name:users[socket.id]});
  })


  socket.on('disconnect', message =>{
    socket.broadcast.emit('left',users[socket.id]);
    delete users[socket.id];
});
});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
  });