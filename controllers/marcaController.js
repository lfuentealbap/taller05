'use strict'

// AQUI Cargamos el modelo para usarlo posteriormente en la siguiente clase
var Marca = require('../modelos/marca.js');

//Funcion GUARDAR MARCA
function guardar(req, res) {

    // Devolvemos una respuesta en JSON
    let marca = new Marca()
    marca.descripcion = req.body.descripcion

    marca.save((err, marcastore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ marca: marcastore })

    })
}

//Listar las marcas que existen
function listar(req, res) {

    Marca.find({},(err,marca)=>{
        if(err) return res.status(500).send({message:'error al realizar la peticion'})
        if(!marca) return res.status(404).send({message:'Error la marca no existe'})

         res.status(200).send({marca})
     })
}
//Elimina una marca
function eliminar(req, res){
    let idMarca = req.params.id

    Marca.findByIdAndDelete(idMarca, (err) => {
        if (err) res.status(500).send('Internal Error');

        res.status(200).send({
            message: 'Marca eliminada'
        });
    }) 
}
 
module.exports = {
    guardar,
    listar,
    eliminar
};
