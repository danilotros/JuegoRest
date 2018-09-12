//Require
const express = require('express');
const app = express();
const rutasJugadores = require('./jugador')
const mongoose = require('mongoose');






//Rutas
app.use('/jugador', rutasJugadores);



//Base de Datos
mongoose.connect('mongodb://localhost/usuario', () => {
    if (err) console.log('Error en la BD');
    else console.log('Esta bien BD');

});


module.exports = app;