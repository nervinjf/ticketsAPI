const db = require("../utils/database");
const { DataTypes, BOOLEAN } = require("sequelize");
const bcrypt = require("bcrypt");

const AvailableTicket = db.define('availableticket', {
    ticketNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: "ticket_number"
      },
      sorteosId: {
        type: DataTypes.INTEGER,
        field: "sorteos_id"
      }
});

module.exports = AvailableTicket;