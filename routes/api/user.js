const router = require("express").Router();
const userController = require("../../controllers/userController");


router.post("/sign", userController.findOne)

router.get("/user", userController.getuserData);

router.put("/user", userController.update);

router.put("/user/info", userController.infoAdd);

module.exports = router