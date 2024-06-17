const { Router } = require("express");
const { adminRegister, getAllAdmin, } = require("../controllers");
const authVerification = require("../middlewares/auth.middleware");


const router = Router();

router.get("/empresatick/admin", getAllAdmin);
router.post('/empresatick/admin', adminRegister);

module.exports = router;