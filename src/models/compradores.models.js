const db = require("../utils/database");
const { DataTypes, BOOLEAN } = require("sequelize");
const bcrypt = require("bcrypt");

const Compradores = db.define('compradores', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false,
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    sorteoId:{
        type:DataTypes.STRING,
        allowNull: false,
        field: "sorteo_id"
    },
    monto: {
        type: DataTypes.DECIMAL
    },
    fechaPago:{
        type: DataTypes.DATEONLY,
        field: "fecha_pago"
    },
    validatePago:{
        type: DataTypes.BOOLEAN
    },
    cantidadTickets:{
        type: DataTypes.INTEGER,
        field: "cantidad_tickets"
    }
});

module.exports = Compradores;