// creando un server
const express = require('express') // para importar cosas

const app = express()
 // Proceso
app.get('/saludo',function(request,response){ // peticion y respuesta
    console.log(request)
    return response.send("Hola mundo")
// en nuestro servidor vamos a recibir la peticion que esta 
// haciendo el cliente
})

app.listen(5000,function(){
    console.log("Funcionando...http://localhost:5000")
})
