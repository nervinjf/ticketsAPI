const db = require("../utils/database");
const { DataTypes, BOOLEAN } = require("sequelize");
const bcrypt = require("bcrypt");

const Users = db.define('users', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        allowNull:false,
    },
    nombre:{
        type:DataTypes.STRING(250),
        allowNull: false,
    },
    apellido:{
        type:DataTypes.STRING(250),
        allowNull: false,
    },
    correo:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
            isEmail:true,
        },
    },
    cedula:{
        type:DataTypes.STRING(100),
    },
    password:{
        type:DataTypes.STRING(100),
        allowNull: false,
    },
    changepassword:{
        type: BOOLEAN
    },

},{
    hooks:{
        beforeCreate: (user, options) =>{
            const { password } = user;
            const hash = bcrypt.hashSync(password, 8);
            user.password = hash;
        },
    },
});

module.exports = Users;