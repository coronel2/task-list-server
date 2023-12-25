const jwt = require("jsonwebtoken");
require("dotenv").config(); // acceso a la variable de entorno .env
const KEY = process.env.KEY;



  const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, KEY, (error, decoded) => {
    if (error) {  
        return res.status(401).json({ error})
        }

    if (decoded.rol == "Admin") {
      req.rol = "Admin";
      next();
    } else if (decoded.rol == "user") {
      req.rol = "user";
     next();
    } else {
      res.status(400).json({ message: "rol no especificado" });
    }
  });
};

module.exports = auth;
