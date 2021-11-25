'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var marcaController = require('../controllers/marcaController');


// Llamamos al router
var api = express.Router();
 
//  Guardar Marca
api.post('/marca', marcaController.guardar);
//Listar marcas
api.get('/marca', marcaController.listar);
//Eliminar marca
api.delete('/marca/:id', marcaController.eliminar);



// Exportamos la confi,guración
module.exports = api;
