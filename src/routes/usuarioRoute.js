const {Router} = require("express")
//necesita el controller 
const listarUsuarios = require("../controllers/usuarioControllers")

const enrutadorUsuario = new Router()

enrutadorUsuario.get("/listado" , listarUsuarios)
//enrutadorUsuario.get("/{id}")
//enrutadorUsuario.post("/crear")

module.exports = enrutadorUsuario