const express = require("express");
const app = express();
const PORT = 3006
const router1 = require("./list-edit-router.js");
const router2 = require("./list-view-router.js");

// Middleware a nivel de aplicación para validar métodos HTTP
const ValidacionMetodo = (req, res, next) => {
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE']; // Métodos válidos permitidos
  
    if (!validMethods.includes(req.method)) {
      return res.status(400).json({ error: 'Método HTTP no válido.' });
    }
  
    next();
  };
app.use(ValidacionMetodo)

app.use(express.json());


app.use( "/list", router1);

app.use( "/list", router2);


app.listen(PORT, () => console.log("el servidor esta funcionando", "" + PORT));

module.exports = app;
module.exports =ValidacionMetodo;
