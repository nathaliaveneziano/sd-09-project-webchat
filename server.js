const express = require('express');

const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000/',
    methods: ['GET', 'POST'],
} });

const PORT = 3000;

app.use(express.static(`${__dirname}/public`));

require('./sockets/chat')(io);

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

http.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
