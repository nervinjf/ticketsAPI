const Users = require("./users.models");
const Admin = require("./admin.models");
const AvailableTicket = require("./AvailableTicket.models");
const Sorteos = require("./sorteos.models");
const Compradores = require("./compradores.models");
const Sold = require("./ticketsSold.models");

module.exports={
    Users,
    Admin,
    AvailableTicket,
    Sorteos,
    Compradores,
    Sold
};