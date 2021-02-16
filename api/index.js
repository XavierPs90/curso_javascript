// -01- importar librerias

// -- require() - linea para importar una libreria en node
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')


const meals = require('./routes/meals')
const orders = require('./routes/orders')

// -02- crear aplicacion de express

// -- primero crear una constante - luego ejecutar la funcion de express
const app = express() // -- esto devuelve una funcion con distintos metodos para poder ir creando la aplicacion 

// -- metodo use - permite agregar plugins (funcionalidades) al servidor express
app.use(bodyParser.json()) 
app.use(cors()) 
// -- nota: todos los plugins tienen formas distintas de utilizarse - revisar sus respectivas documentaciones

// -03- crear conexion con la base de datos

// -- .connect conecta a la base de datos creada a mongo atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// -04- pasar las rutas a la aplicación usando .use

// -- .use(String, constante) 
// -- String (así detecta que se le está pasando una dirección), constante (una instancia de un router de la aplicación)
app.use('/api/meals', meals)
app.use('/api/orders', orders)

module.exports = app