const express = require('express');

// Requerido para Sockets con express
// --
const socketIO = require('socket.io');
const http = require('http');
// --

const path = require('path');

const app = express();

// Es necesario definir un server.
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// Inicializar el Socket.io
// IO = esta es la comunicación del Backend
// Cada vez que se necesite se referencia io
// let io = socketIO(server);
module.exports.io = socketIO(server); // Exportar io para que se pueda usar en socket.js
require('./sockets/socket'); // Invocar socket.js


// ahora se llava server.listen
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});