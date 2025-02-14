const { userRegister, getAllUsers } = require("./users.controllers");
const { adminRegister, getAllAdmin } = require("./admin.controllers");
const { userLogin } = require("./auth.controllers");
const { compradoresRegister, getAllCompradores, compradoresUpdate } = require("./compradores.controllers");
const { sorteosRegister,getAllSorteos, uploadFile } = require("./sorteos.controllers");

module.exports = {
    userRegister, 
    getAllUsers, 
    userLogin,
    adminRegister,
    getAllAdmin,
    compradoresRegister,
    getAllCompradores,
    compradoresUpdate,
    sorteosRegister,
    getAllSorteos,
    uploadFile
};