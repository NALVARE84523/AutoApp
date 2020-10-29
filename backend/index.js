// Modulos internos
const express = require("express");
const mongoose = require("mongoose");
// Modulos creados
const usuario = require("./routes/usuario");
const auth = require("./routes/auth");
const auto = require('./routes/auto');
// App
const app = express();
app.use(express.json());
app.use("/api/usuario/", usuario);
app.use("/api/auth/", auth);
app.use('/api/auto/', auto);

// Puerto de ejecucion
const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Ejecutando en puerto: " + port));
// Registro en BD
mongoose
  .connect("mongodb://localhost/autapp", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conecion con mongo: OK"))
  .catch((error) => console.log("Conexion con mongo: OFF"));
