const { Router } = require("express");
const { sorteosRegister, getAllSorteos } = require("../controllers");
const authVerification = require("../middlewares/auth.middleware");


const router = Router();

router.get("/empresatick/sorteos", getAllSorteos);
router.post('/empresatick/sorteos', sorteosRegister);

module.exports = router;