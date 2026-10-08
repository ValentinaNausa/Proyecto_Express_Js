const miApp = require ("./app")
const PUERTO = process.env.PUERTO || 3333

miApp.listen(PUERTO, ()=>{
    console.log(`servidor corriendo: http://localhost:${PUERTO}`)
})
