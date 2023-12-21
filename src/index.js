
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken'); 
const auth = require('./middleware/auth');
require ("dotenv").config(); // acceso a la variable de entorno .env
const KEY = process.env.KEY;
const PORT = process.env.PORT;

app.use(express.json())

const users = [
    { email:"eric@gmail.com", password: 12345, rol: "Admin"},
    { email:"elvinh@gmail.com", password: 55555, rol: "Client"},
    { email:"michael@gmail.com", password: 12235, rol: "Client"}


];

//ingresar al endpoint body-raw-json me genera el token.

app.post('/login',(req, res) =>{
const { email, password } = req.body;
const user = users.find((user) => user.email === email && user.password === password);

if (user) {

    const token = jwt.sign( user, KEY);
    res.status(200).json({token});
}else{
    res.status(401).json({message: "usuario o contraseña inválido"});
}

});

// se crea una ruta secreta, en este se ingresa al headers- creas la authorization 
//pegas el token y descodifica el codigo que recibira el usuario.

app.get("/secret", auth,(req, res) =>{

    if (req.rol === "Admin"){
        return res.status(200).json({users});
    }else{

        return res.status(401).json({message: "No tienes acceso a la ruta"});
    }
 
});

app.delete("/secret", auth,(req, res) =>{
  if (req.rol === "Admin"){
    res.status(200).json({message: "el recurso se ha borrado"});

  }else{
    return res.status(401).json({message:"no tienes acceso a la ruta" })
  }
});

app.get("/listatareas", auth,(req, res) =>{
    res.status(200).json("lista de tareas")
})


app.listen(PORT, ( ) =>{ console.log ("funcionando el puerto", + PORT)  })