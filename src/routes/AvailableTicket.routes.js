const { Router } = require("express");
const { userRegister, getAllUsers } = require("../controllers");
const authVerification = require("../middlewares/auth.middleware");


const router = Router();

router.get("/empresatick/availableticket", getAllUsers);
router.post('/empresatick/availableticket', userRegister);

module.exports = router;