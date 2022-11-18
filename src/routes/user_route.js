let express = require("express");
let router = express.Router();
let auth = require("./../services/auth_services");
let asyncMiddleware = require("./../services/async_middleware");

let userController = require("./../controllers/user_controller");

router.post("/add_user", asyncMiddleware(userController.addUser));
// router.post("/add_user", auth, asyncMiddleware(userController.addUser));

module.exports = router;