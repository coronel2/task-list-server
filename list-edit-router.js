const { Router } = require("express");
const router = Router();

// Middleware para list-edit-router
const ValidEditErrors = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res
      .status(400)
      .json({ error: "El cuerpo de la solicitud  está vacío." });
  }

  next();
};
function validarObjeto(req, res, next) {
  const { description, indicator, complete } = req.body;

  // Verificar si alguno de los campos requeridos está incompleto o no existe
  if (!description || !indicator || typeof complete === "undefined") {
    return res
      .status(400)
      .json({ error: "Parámetros incompletos o faltantes" });
  }

  // Si la validación pasa, sigue con el siguiente middleware/ruta
  next();
}
const Task = [];

router.put("/crear", ValidEditErrors, validarObjeto, (req, res, next) => {
  const { indicator, description, completed } = req.body; // se desestructura el objeto para llamar. lo que quiero del body
  const newTask = {
    id: Date.now(), //da un id unico
    indicator,
    description,
    completed,
  };
  console.log(newTask);

  Task.push(newTask); //guardar en el array nueva tarea
  res.status(201).json({ message: "Tarea creada put" }); // mostrat estado si la informacion en correcta.
});


router.post("/crear1", ValidEditErrors, validarObjeto, (req, res, next) => {
  const { indicator, description, completed } = req.body; // se desestructura el objeto para llamar. lo que quiero del body
  const newTask = {
    id: Date.now(), //da un id unico
    indicator,
    description,
    completed,
  };
  console.log(newTask);

  Task.push(newTask); //guardar en el array nueva tarea
  res.status(201).json({ message: "Tarea creada post" }); // mostrat estado si la informacion en correcta.
});





module.exports = validarObjeto;
module.exports = ValidEditErrors;
module.exports = router;
