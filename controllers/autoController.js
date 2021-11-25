'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Auto = require('../modelos/auto.js');

function guardar(req,res){

    console.log("Estoy aqui")

    let auto = new Auto()
    auto.patente = req.body.patente 
    auto.anio = req.body.anio
    auto.marca = req.body.idMarca

    auto.save((err, autoguardado) => {

        res.status(200).send({ autoInsertado: autoguardado })

    })

}


function listar(req,res){
     Auto.find()
      .populate('marca', 'descripcion').exec((err, autosconmarca) => {
        res.status(200).send({ autosconmarca })
      })
  }


module.exports = {
    guardar,
    listar
};
