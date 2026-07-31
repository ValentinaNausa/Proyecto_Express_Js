//const express = require('express');
import express from 'express'
//leer el archivo .env
import {configDotenv} from "dotenv"
configDotenv()

const app = express()
const puerto = process.env.puerto

app.get("/", function (req, res){
res.send(` Hola aprendiendo express, con la ficha 3407181, ADSO en el SENA 31 Julio `);
})
//otro endpoint
app.get("/otraruta",(req, res) => {
//usando template string
res.send(`<h1> Otro Ejemplo de ruta</h1>
    <h2>End point con res.send</h2>`)
})

//otro endpoint
app.get("/ruta2",(req, res) => {
res.json({"nombre": "Valentina", "Apellido": "Nausa", "ficha": 3407181, "programa": "ADSO"})
})

//otro endpoint
app.get("/ruta3/:aprendiz/:otrodato",(req, res) => {
     const dato_aprendiz = req.params.aprendiz
     const otro_dato = req.params.otrodato
res.json({"nombre": dato_aprendiz, "Otro": otro_dato})
})

//otro endpoint
app.get("/ruta4",(req, res) => {
    //capturar el parametro de consulta query
    const orden = req.query.orden || "sin ordenar"
    const pagina = req.query.orden || 1
res.send(`<h1>Listado Aprendices</h1>
    <p>El listado esta en orden ${orden}</p>
    <p>Pagina: ${pagina}</p>
    `)
})


app.listen(puerto, function () {
console.log( `SERVIDOR: http://localhost:${puerto}`)
})
