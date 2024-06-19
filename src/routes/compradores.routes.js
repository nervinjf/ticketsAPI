const { Router } = require("express");
const { compradoresRegister, getAllCompradores, compradoresUpdate } = require("../controllers");
const authVerification = require("../middlewares/auth.middleware");


const router = Router();

router.get("/empresatick/compradores", getAllCompradores);
router.post('/empresatick/compradores', compradoresRegister);
router.put('/empresatick/compradores/:id', compradoresUpdate);

module.exports = router;