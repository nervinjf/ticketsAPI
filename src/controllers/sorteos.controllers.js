const { SorteosServices } = require('../services');

const sorteosRegister = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await SorteosServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "faltan datos",
        })
    }
};

const getAllSorteos = async (req, res, next) => {
    try {
        const result = await SorteosServices.getAll();
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
    sorteosRegister,
    getAllSorteos,
}