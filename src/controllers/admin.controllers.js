const { AdminServices } = require('../services');

const adminRegister = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await AdminServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "faltan datos",
        })
    }
};

const getAllAdmin = async (req, res, next) => {
    try {
        const result = await AdminServices.getAll();
        res.json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Algo salio mal"
        })
    }
}

module.exports = {
    adminRegister,
    getAllAdmin,
}