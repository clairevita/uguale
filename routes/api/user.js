const router = require("express").Router();
const userController = require("../../controllers/userController");

// router.route("api/:id")
// .get(userController.findById)
// .put(userController.update);

router.route("api/user")
.post(userController.create);

module.exports = router;

