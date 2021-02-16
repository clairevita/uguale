const router = require("express").Router();
const userController = require("../../controllers/userController");


router.post("/signup", userController.create);

router.get("/user/:id", userController.findById);

module.exports = router