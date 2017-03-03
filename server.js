const osc = require('node-osc');
const express = require('express');

const app = express();
const port = 1234;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

const io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});

// Change these values to match the outgoing port and local IP in TouchOSC
// use 0.0.0.0 to listen to all available IP adresses
const oscServer = new osc.Server(8000, '0.0.0.0');

oscServer.on('message', (message) => {
  io.sockets.emit('osc', message);
});
