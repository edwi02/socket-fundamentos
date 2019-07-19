const { io } = require('../server'); // Importar io desde el archivo server.js

// Para saber cuando un usuario ser conecta
io.on('connection', (client) => {
    // Cliente obtiene toda la información del cliente conectado
    console.log('Usuario conectado');

    // Emitir mensaje al cliente. 
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    // Para saber si el usuario se desconecto
    client.on('disconnect', ()=>{
        console.log('Usuario desconectado.');
    });

    // Escuchar el cliente
    // Adicionar confirmar si recibe un mensaje enviado desde el servidor
    client.on('enviarMensaje', ( data, callback )=>{

        console.log(data);

        // Para transmitir a todo el mundo
        // Se envia >data< porque tiene la estructura del objeto
        // usuario: 'Nombre Usuario'
        // mensaje: 'Texto Mensaje'
        client.broadcast.emit('enviarMensaje', data );

        /*
        if( mensaje.usuario ) {
            callback({
                resp: 'TODO SALIO BIEN!!'
            });
        }else {
            callback({
                resp: 'TODO SALIO MAL!!'
            });
        } */

    });
});
