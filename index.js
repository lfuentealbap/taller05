'use strict'
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.options('*', cors())

var auto_nuevo_routes = require('./routes/autoNuevoRoute');
var marca_routes = require('./routes/marcaRoute');
app.use('/api', auto_nuevo_routes);
app.use('/api', marca_routes);


const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true, //this is the code I added that solved it all
    keepAlive: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4, // Use IPv4, skip trying IPv6
    useFindAndModify: false,
    useUnifiedTopology: true
  }

  mongoose.connect(`mongodb://192.99.144.232:27017/grupo13?security=false`, options)
  .then(() => console.log('> Successfully connected to DB'))
  .catch(err => console.log(err))  

    app.listen(4000, () => {

        console.log("Esta corriendo en puerto 4000")
    })
