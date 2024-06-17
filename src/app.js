const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const { 
  UsersRoutes,
  authRoutes,
  AdminRoutes,
  SorteosRoutes,
  CompradoresRoutes,
  AvailableRoutes
  } = require("./routes");
const transporter = require("./utils/mailer");
const moment = require("moment");
const cron = require('node-cron');



require("moment-timezone");
moment.locale('es-VE');
moment.tz.setDefault("America/Caracas");

console.log("Zona horaria actual:", moment.tz.guess());

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());



initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ alter: true })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

transporter
  .verify() // devuelve una promesa
  .then(() =>
    console.log("Estamos listos para enviar correos a diestra y siniestra")
  );

  app.get("/", (req, res) => {
    const mensaje = "Hola, este es un mensaje de prueba";
    res.send("¡Hola Mundo!");
  });

app.use("/api/v1", UsersRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", AdminRoutes);
app.use("/api/v1", SorteosRoutes);
app.use("/api/v1", CompradoresRoutes);
app.use("/api/v1", AvailableRoutes);
// cron.schedule('0 23 * * *', actualizarClientes);


app.use(handleError);

module.exports = app;
