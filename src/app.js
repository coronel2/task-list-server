const express = require("express")
const app = express();
const PORT = 5020
const listatareaEndpoint = require("../router/resapis");


app.use(express.json());

app.use("/listatareas", listatareaEndpoint);


app.get("/", function (req, res) {
  res.send("Bienvenido a la api Lista de Tareas");
});

app.listen(PORT, () =>console.log("servidor funcionando" + '', PORT));



module.exports = app;