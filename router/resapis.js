const express = require("express");
const router = express.Router();
const lista_Tareas = require ("./data/index")

//Crear una nueva tarea
router.post("/crear", (req, res) => {
  const { completed, description } = req.body;
  if (!completed || !description) {
    return res
      .status(400)
      .json({ message: " Se requiere description y completed" });
  }
  const tareaNueva = {
    id: Date.now(),
    completed,
    description,
  };
  lista_Tareas.push(tareaNueva);
  res.status(201).json({ message: "Creada nueva tarea" });
});

//Listar todas las tareas
router.get("/todastareas", (req, res) => {
  if (lista_Tareas.length === 0) {
    res.sendStatus(404);
  } else {
    res.status(200).json({ lista_Tareas });
  }
});

//actualizar tarea

router.put("/actualizar/:id", (req, res) => {
  const id = req.params.id;
  const { completed, description } = req.body;

  const tarea = lista_Tareas.find((tarea) => tarea.id == id);

  if (tarea) {
    tarea.completed = completed;
    tarea.description = description;

    res.status(200).json({ message: "Tarea actualizada" });
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

//eliminar
router.delete("/eliminar/:id", (req, res) => {
  const id = req.params.id;

  const indiceTarea = lista_Tareas.findIndex((tarea) => tarea.id == id);

  if (indiceTarea !== -1) {
    lista_Tareas.splice(indiceTarea, 1);
    res.status(200).json({ message: "Tarea eliminada" });
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});

//Listas las tareas completas y las incompletas

router.get("/completed", (req, res) => {
  const tareasCompletas = lista_Tareas.filter(
    (tarea) => tarea.completed === true
  );
  const tareasIncompletas = lista_Tareas.filter(
    (tarea) => tarea.completed !== true
  );

  if (tareasCompletas.length === 0 && tareasIncompletas.length === 0) {
    res
      .status(404)
      .json({ message: "No se encontraron tareas completas ni incompletas" });
  } else {
    res.status(200).json({ tareasCompletas, tareasIncompletas });
  }
});

//mostrar una sola tareas

router.get("/tareas/:id", (req, res) => {
  const id = req.params.id;
  const tarea = lista_Tareas.find((tarea) => tarea.id == id);

  if (tarea) {
    res.json({ tarea });
  } else {
    res.status(404).json({ message: "Tarea no encontrada" });
  }
});
module.exports = router;
