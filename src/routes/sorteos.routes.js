const { Router } = require("express");
const { sorteosRegister, getAllSorteos, uploadFile } = require("../controllers");
const authVerification = require("../middlewares/auth.middleware");
const multer = require('multer');

// Configurar Multer para guardar los archivos temporalmente en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = Router();

router.get("/empresatick/sorteos", getAllSorteos);
router.post('/empresatick/sorteos', sorteosRegister);
router.post('/empresatick/sorteos/upload', upload.single('archivo'), uploadFile); // Ruta para manejar la subida de archivos

module.exports = router;