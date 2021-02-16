const router = require("express").Router();
const userController = require("../../controllers/userController");


router.post("/sign", userController.findOne);

router.get("/user/:id", userController.findById);

module.exports = router