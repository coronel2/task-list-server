const { Router } = require("express");

const router = Router();
const array = [
  { id: 1, completada: false, descripcion: "Exportar Espress" },
  { id: 2, completada: true, descripcion: "Exportar Espress" },
];

router.post("/crear/:id", (req, res) => {
  const id = req.params.id;
  const completada = array.find((array) => array == 1);
  res.send(`Tarea ${id} creada`);
  res.end();
});
router.delete("/eliminar/:id", (req, res) => {
  const id = req.params.id;
  const completada = array.find((array) => array == 1);
  res.send(`Tarea ${id} eliminada`);
  res.end();
});

router.put("/actualizar/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Tarea ${id}: actualizada`);
  res.end();
});


module.exports = router;
