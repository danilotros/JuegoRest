const mongoose = require('mongoose');
Schema = mongoose.Schema;

var usuario = ({
    nombre: String,
    clave: String,
    puntajeViejo:Number,
    puntajeNuevo:Number
});

module.exports=mongoose.model('Usuario',usuario);