const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/:id")
.get(userController.findById)
.put(userController.update);

router.route("/")
.get(userController.findAll)
.post(userController.create);

module.exports = router;