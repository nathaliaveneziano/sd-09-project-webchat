const express = require('express');
const path = require('path');
require('dotenv').config();

const { SOCKET_PORT } = process.env || 3000;

const app = express();
// configuracao do socket.io
const socketIoServer = require('http').createServer(app);
const io = require('socket.io')(socketIoServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.set('views', path.join(__dirname, './views'));
app.use(express.static(path.join(__dirname, 'public')));

require('./sockets/chat')(io);

const controllers = require('./controllers/chatController');


app.get('/', controllers.getMessages);
// app.use('/', controllers);

socketIoServer.listen(SOCKET_PORT, () =>
  console.log(`Socket.io running... | port: ${SOCKET_PORT}`));
