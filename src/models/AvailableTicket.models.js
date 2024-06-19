const db = require("../utils/database");
const { DataTypes, BOOLEAN } = require("sequelize");
const bcrypt = require("bcrypt");

const AvailableTicket = db.define('availableticket', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  ticketNumber: {
    type: DataTypes.INTEGER,
    field: "ticket_number"
  },
  sorteoId: {
    type: DataTypes.INTEGER,
    field: "sorteo_id"
  },
  ticket: {
    type: DataTypes.STRING,

  },
});

module.exports = AvailableTicket;