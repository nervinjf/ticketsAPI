const db = require("../utils/database");
const { DataTypes, BOOLEAN } = require("sequelize");
const bcrypt = require("bcrypt");

const Sold = db.define('sold', {

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
        type:DataTypes.INTEGER,
        allowNull: false,
        field: "sorteo_id"
    },
    numeroTickets:{
        type: DataTypes.INTEGER,
        field: "numero_ticket"
    }
});

module.exports = Sold;