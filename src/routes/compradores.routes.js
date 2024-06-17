const { Router } = require("express");
const { compradoresRegister, getAllCompradores } = require("../controllers");
const authVerification = require("../middlewares/auth.middleware");


const router = Router();

router.get("/empresatick/compradores", getAllCompradores);
router.post('/empresatick/compradores', compradoresRegister);

module.exports = router;