require("dotenv").config()
const express = require ("express")

const miApp = express ()

// mi aplicasion utiliza los middleware
miApp.use(express.json())
miApp.use(express.urlencoded({extended: true})) 
//importar middleware propios 

//ruta principal de mi api
miApp.get("iidpoidii/",(req,res)=>{
    res.send("MI APIN REST FICHA 3407181")
})


module.exports = miApp 

