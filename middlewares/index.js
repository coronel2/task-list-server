const validEditErrors = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ error: "El cuerpo de la solicitud  está vacío." });
    }
  
    next();
  };
  const  validarObjeto = (req, res, next) => {
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

  module.exports = validarObjeto;
  module.exports = validEditErrors;