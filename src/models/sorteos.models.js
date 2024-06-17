const db = require("../utils/database");
const { DataTypes, BOOLEAN } = require("sequelize");
const bcrypt = require("bcrypt");

const Sorteos = db.define("sorteos", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    adminId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "admin_id",
    },
    nombre: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    fechaInicio: {
        type: DataTypes.DATEONLY,
        field: "fecha_inicio"
    },
    fechaFin: {
        type: DataTypes.DATEONLY,
        field: "fecha_fin"
    },
    activo:{
        type: DataTypes.BOOLEAN,
    }

});

module.exports = Sorteos;