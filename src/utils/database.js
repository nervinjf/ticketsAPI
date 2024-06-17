const { Sequelize } = require("sequelize");
require("dotenv").config();
const { Tedious } = require("sequelize");

const db = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  // dialectModule: Tedious,
//   options: {
//     instanceName: 'SQLEXPRESS'
// },
  logging: false,
  timezone: "America/Caracas", // Ajusta la zona horaria según tu ubicación
  useUTC: false,
});

module.exports = db;