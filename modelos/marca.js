'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const MarcaSchema = Schema(
    {
      descripcion:String
    })

module.exports = mongoose.model('marca', MarcaSchema)    