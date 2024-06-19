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

async function uploadFile(req, res, next) {
    if (!req.file) {
      return res.status(400).send('No se subió ningún archivo.');
    }
  
    try {
      const imageUrl = await SorteosServices.uploadToFTP(req.file);
      console.log(imageUrl)
      res.json({ message: 'Archivo subido exitosamente', url: imageUrl });
    } catch (err) {
        next({
            status: 500,
            errorContent: err,
            message: "Hubo un error subiendo la imagen."
        })
    }
  }

module.exports = {
    sorteosRegister,
    getAllSorteos,
    uploadFile
}