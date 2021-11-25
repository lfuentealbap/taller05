'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutoSchema = Schema(
    {
      patente:String,
      anio: {type: Number},
      marca: [{ type: Schema.ObjectId, ref: "marca" }] 

    })

module.exports = mongoose.model('auto',AutoSchema)