const router = require("express").Router();
const userController = require("../../controllers/userController");

// // Matches with "/api/user"
// router.route("user/")
//   .get(userController.findAll)
//   .post(userController.create);

// // Matches with "/api/user/:id"
// router.route("user/:id")
//   .get(userController.findById)
//   .put(userController.update)


router.post("/user/:id", userController.create);

router.get("/user/:id", userController.findById);

module.exports = router;

