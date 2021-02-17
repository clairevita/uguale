const router = require("express").Router();
const userController = require("../../controllers/userController");


router.post("/sign", userController.findOne)
.then( (result) => {
    return result;
});;

router.get("/user/:id", userController.findById);

router.put("/user", userController.update);

module.exports = router