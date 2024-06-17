const { Router } = require("express");
const { userRegister, getAllUsers } = require("../controllers");
const authVerification = require("../middlewares/auth.middleware");


const router = Router();

router.get("/empresatick/users",  authVerification, getAllUsers);
router.post('/empresatick/users', userRegister);

module.exports = router;