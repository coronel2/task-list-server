const { Router } = require("express");

const router = Router();
const array = [
  { id: 12, completada: false, descripcion: "Exportar Espress" },
  { id: 13, completada: true, descripcion: "Exportar Espress" },
];

router.get("/completa/:id", (req, res) => {
    const id = req.params.id;
    const completada = array.find((array) => array == 12);
    res.send(`Tarea ${id} completada`);
    console.log(`Tarea ${id} completada`);
    res.end();
  });
  router.get("/incompleta/:id", (req, res) => {
    const id = req.params.id;
    const completada = array.find((array) => array == 13);
    res.send(`Tarea ${id} incompleta`);
    console.log(`Tarea ${id} incompleta`);
    res.end();
  });

module.exports = router;
