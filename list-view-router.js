const {Router}= require('express')
const router = Router();

// Middleware para list-view-router
const ValidParams = (req, res, next) => {
    const { id } = req.params;
  
    // Verificar si el parámetro 'id' es válido (puedes agregar más validaciones según tu lógica)
    if (!id || isNaN(id)) {
      return res.status(400).json({ error: 'Parámetros incorrectos.' });
    }
  
    next();
  };
  
  router.get("/completa/:id",ValidParams, (req, res) => {
    const id = req.params.id;
    const completada = array.find((array) => array == 12);
    res.send(`Tarea ${id} completada`);
    console.log(`Tarea ${id} completada`);
    res.end();
  });
  router.get("/incompleta/:id",ValidParams, (req, res) => {
    const id = req.params.id;
    const completada = array.find((array) => array == 13);
    res.send(`Tarea ${id} incompleta`);
    console.log(`Tarea ${id} incompleta`);
    res.end();
  });




  module.exports = ValidParams;
  
