const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/:id")
.get(userController.findById)
.put(userController.update);

router.route("/signup")
.post(userController.create);

module.exports = router;

