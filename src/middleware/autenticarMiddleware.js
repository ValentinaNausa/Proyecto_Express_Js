const jwt = require("jsonwebtoken")
//funcion para generar verificar
const autenticarMiddleware =(req,res,next )=>{
    //capturar el token enviado por el usuaerio
    const token = req.header("autenticar")?.split(" ")[1]
    if(!token){
        res.estatus(401).json({mensaje:"acceso denegado no proporciona token"})
    }
    //verificar
    jwt.verify(token, process.env.JWT_SECRETO,(error,usuario)=>{
        if(error){
            res.status(403).json({mensaje: "token invalido"})
        }
        req.usuario = usuario 
    } )
}

module.exports = autenticarMiddleware
