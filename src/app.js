const express = require('express');
const app = express();
const jwt = require('jsonwebtoken'); 
require ("dotenv").config(); // acceso a la variable de entorno .env
const KEY = process.env.KEY;
const listatareaEndpoint = require("../router/resapis");
const PORT = 5020
console.log("Port: " + PORT)


app.use(express.json())

const users = [
    {nombre: "Erick", email:"eric@gmail.com", password: 123456, rol: "Admin"},
    {nombre: "Elvin", email:"elvinh@gmail.com", password: 123456, rol: "user"}

];

//Crea una ruta /login con el método POST para hacer el proceso de autenticación
//Implementa la creación de un JWT en la ruta /login para una serie de usuarios 
//predefinidos en un array dentro de tu servidor

app.post('/login',(req, res) =>{
    const { nombre, email, password } = req.body;
    const user = users.find((user) => user.nombre === nombre && user.email === email && user.password === password);
    
    if (user) {
    
        const token = jwt.sign( user, KEY);
    
        res.status(200).json({token});
    }else{
        res.status(401).json({message: "usuario o contraseña inválido"});
    }
    
    });

    
// Crea una ruta protegida que haga la validación de un token JWT recibido 
//dentro de un header de autorización que esté en la petición.

    app.get('/protegida', (req, res) => {
    try{
  
      const token = req.headers.authentication.split ( ' ' )[1]
      const Paylod = jwt.verify(token, KEY)

      if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
      }

        res.send('acceso  a la Ruta protegida')
      
  
    }catch (error){
      return res.status(401).json({ error: error.message});

    }

    });
    
    //conecta con el router y hace las solicitudes con diferentes endpoints.
    app.use("/listatareas", listatareaEndpoint);


    app.get("/", function (req, res) {
      res.send("Bienvenido a la api Lista de Tareas");
    });
    


    app.listen(PORT, () => console.log("funcionando puerto" + PORT))