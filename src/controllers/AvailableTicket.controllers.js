const { AvailableServices } = require('../services');

const availableRegister = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await Services.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "faltan datos",
        })
    }
};

const getAllAvailable = async (req, res, next) => {
    try {
        const result = await UserServices.getAll();
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
    userRegister,
    getAllUsers,
}