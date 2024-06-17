
const {Users, Compradores, Admin, Sorteos, AvailableTicket, Sold, } = require("./index");



const initModels = () => {

    Compradores.belongsTo(Users, {as: "compradoresuser", foreignKey: "user_id"});
    Users.hasMany(Compradores, {as: "usercompradores", foreignKey: "user_id"});

    Sorteos.belongsTo(Admin, {as: "sorteosdmin", foreignKey: "admin_id"})
    Admin.hasMany(Sorteos, {as: "adminsorteos", foreignKey: "admin_id"})

    Compradores.belongsTo(Sorteos, {as: "compradoressorteos", foreignKey: "sorteo_id"})
    Sorteos.hasMany(Compradores, {as: "sorteoscompradores", foreignKey: "sorteo_id"})

    AvailableTicket.belongsTo(Sorteos, {as: "availablesorteos", foreignKey: "sorteo_id"})
    Sorteos.hasMany(AvailableTicket, {as: "sorteosavailable", foreignKey: "sorteo_id"})

    Sold.belongsTo(Sorteos, {as: "soldsorteos", foreignKey: "sorteo_id"})
    Sorteos.hasMany(Sold, {as: "sorteossold", foreignKey: "sorteo_id"})

}

module.exports = initModels;