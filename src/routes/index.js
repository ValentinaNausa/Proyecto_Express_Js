const {Router} = require("express")

const enrutadorUsuario = require("./usuarioRoute")

const enrutadorGeneral = new Router()

enrutadorGeneral.use("/usuarios", enrutadorUsuario)

//enrutadorGeneral.use("/productos", enrutadorProductos)

module.exports = enrutadorGeneral