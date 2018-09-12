const express = require('express');
const rutas = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Usuario=require('./Usuario');



rutas.post('/login', bodyParser.json(), (req, res) => {

    console.log('req.body:',req.body);
    const usuario=new Usuario({
          nombre:req.body.nombre,
          puntaje: req.body.puntaje
    });
 
    usuario.save()
    .then(result=>{console.log(result);})
    .catch(err=>console.log(err));

    res.status(200).json(
        {
            jugadorCreado: usuario

        }
    );

});



rutas.patch('/:jugadorId', (req, res, next) => {
    res.status(200).json({
        message: 'Actualizando la base de datos de jugadores'
    });
});



module.exports = rutas;