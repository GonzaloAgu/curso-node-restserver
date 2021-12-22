const express = require('express');
const cors = require('cors');

class Servidor {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middleware
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares(){
        console.log('Iniciando middleware...');
        
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() );
        
        // Directorio público
        this.app.use(express.static('public'))
    }

    routes() {
       console.log('Estableciendo rutas...');

       this.app.use(this.usuariosPath, require('../routes/user'));
        
    }

    listen() {
        console.log('Estableciendo listen...');
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        }
        );
    }

    
}


module.exports = Servidor;