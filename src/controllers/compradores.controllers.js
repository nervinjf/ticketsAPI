const { CompradoresServices } = require('../services');

const compradoresRegister = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await CompradoresServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "faltan datos",
        })
    }
};

const getAllCompradores = async (req, res, next) => {
    try {
        const result = await CompradoresServices.getAll();
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
    compradoresRegister,
    getAllCompradores,
}