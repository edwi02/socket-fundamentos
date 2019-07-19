
var socket = io();

// Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar
socket.on('disconnect', ()=>{
    console.log('Se pedio conexión con el servidor');
});

// Enviar información
// Adicional conocer si en realidad la recibió el usuario. agregando un tecer argumento [function()]
socket.emit('enviarMensaje', {
    usuario: 'Edwin',
    mensaje: 'Hola Mono!'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchas información (Escuah la info de client.emit('enviarMensaje',)
socket.on('enviarMensaje', function(mensaje){
    console.log('Servidor: ', mensaje);
});
