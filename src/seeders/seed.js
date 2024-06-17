// const db = require("../utils/database");
// const { Users, Asegurado, Cita, Cotizacion, Tomador, CitaCoti } = require("../models");
// const initModels = require("../models/initModels");

// initModels();

// const users = [
//   {
//     firstname: "Nervin",
//     lastname: "Flores",
//     email: "nflores@gmail.com",
//     password: "1234",
//     phone: "0000000000",
//   },
//   {
//     firstname: "admin ",
//     lastname: "admin",
//     email: "admin@admin.com",
//     password: "admin",
//     phone: "5599887744",
//   },
// ];

// const tomador = [
//   {
//     userId: 1,
//     firstname: "test",
//     lastname: "test",
//     ci: "27256545",
//     email: "testing@test.com",
//     phone1: "111111111111",
//     phone2: "",
//     phone3: "",
//     address: "caracas",
//     address: "guatire",
//     fNacimiento: "2022-01-17",
//     patologia: "nada",
//     medicamentos: "nada"
//   },
//   {
//     userId: 2,
//     firstname: "test1",
//     lastname: "test1",
//     ci: "214612542",
//     email: "testing1@test.com",
//     phone1: "111222113311",
//     phone2: "",
//     phone3: "",
//     address: "caracas",
//     address: "guatire",
//     fNacimiento: "2022-01-17",
//     patologia: "nada",
//     medicamentos: "nada"
//   },
// ];

// const asegurado = [
//   {
//     userId: 1,
//     tomadorId: 1,
//     firstname: "test",
//     lastname: "test",
//     ci: "27256545",
//     email: "testing23@test.com",
//     parentesco: "mama",
//     phone1: "111111111111",
//     phone2: "",
//     phone3: "",
//     address: "caracas",
//     address: "guatire",
//     fNacimiento: "2022-01-17",
//     patologia: "nada",
//     medicamentos: "nada"
//   },
//   {
//     userId: 2,
//     tomadorId: 2,
//     firstname: "test",
//     lastname: "test",
//     ci: "27256545",
//     email: "testing2@test.com",
//     parentesco: "mama",
//     phone1: "111111111111",
//     phone2: "",
//     phone3: "",
//     address: "caracas",
//     address: "guatire",
//     fNacimiento: "2022-01-17",
//     patologia: "nada",
//     medicamentos: "nada"
//   },
// ];

// const cita = [
//   {
//     tomadorId: 1,
//     userId: 1,
//     codigo: 1222554,
//     fecha: "2022-01-17 04:33:12",
//     tipo: "Presencial"
//   },
//   {
//     tomadorId: 2,
//     userId: 1,
//     codigo: 2151484,
//     fecha: "2022-12-22 08:30:00",
//     tipo: "Virtual"
//   },
// ];

// const cotizacion = [
//   {
//     tomadorId: 1,
//     userId: 2,
//     plan: "Oro",
//     asegurados: 1,
//     fPago: "Dolares",
//     efectivo: "Deposito",
//     tiempo: "Semestral"
//   },
//   {
//     tomadorId: 2,
//     userId: 1,
//     plan: "Plata",
//     asegurados: 1,
//     fPago: "BS",
//     efectivo: "Transferencia",
//     tiempo: "Trimestral"
//   },
// ];

// db.sync({ force: true }).then(() => {
//   console.log("Sincronizado");
//   users.forEach(async (user) => await Users.create(user));
//   setTimeout(() => {
//     tomador.forEach(
//       async (tomador) => await Tomador.create(tomador)
//     );
//   }, 100);
//   setTimeout(() => {
//     asegurado.forEach(
//       async (asegurado) => await Asegurado.create(asegurado)
//     );
//   }, 200);
//   setTimeout(() => {
//     cita.forEach(async (cita) => await CitaCoti.create(cita));
//   }, 300);
//   setTimeout(() => {
//     cotizacion.forEach(async (cotizacion) => await Cotizacion.create(cotizacion));
//   }, 400);
// });
