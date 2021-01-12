// -01- importar librerias

// -- linea para importar una libreria en node
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// -02- crear aplicacion de express

// -- primero crear una constante - luego ejecutar la funcion de express
const app = express() // -- esto devuelve una funcion con distintos metodos para poder ir creando la aplicacion 
// -- metodo use - permite agregar plugins al servidor express para poder ir agregando funcionalidades al servidor
app.use(bodyParser.json()) // -- funcionalidad (plugin) con metodo json
app.use(cors()) // -- funcionalidad con metodo cors
// -- nota: todos los plugins tienen formas distintas de utilizarse - revisar sus respectivas documentaciones

// -03- crear conexion con la base de datos

// -- .connect conecta a la base de datos creada a mongo atlas
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })


app.get('*', (req, res) => 
{
    res.send('chanchito feliz')
})

module.exports = app