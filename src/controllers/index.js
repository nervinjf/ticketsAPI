const { userRegister, getAllUsers } = require("./users.controllers");
const { adminRegister, getAllAdmin } = require("./admin.controllers");
const { userLogin } = require("./auth.controllers");
const { compradoresRegister, getAllCompradores } = require("./compradores.controllers");
const { sorteosRegister,getAllSorteos } = require("./sorteos.controllers");

module.exports = {
    userRegister, 
    getAllUsers, 
    userLogin,
    adminRegister,
    getAllAdmin,
    compradoresRegister,
    getAllCompradores,
    sorteosRegister,
    getAllSorteos,
};