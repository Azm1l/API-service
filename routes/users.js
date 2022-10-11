var express = require("express");
const verifyToken = require("../middlewares/verify-token");
var router = express.Router();
const userHandler = require("./handlers/users");
const userIDHandler = require("./handlers/users/id");

//Get Data User
router.get("/", verifyToken, userHandler.get);

//Get Data User By Id
router.get("/:userId", verifyToken, userIDHandler.get);

//update user by id
router.put("/:userId", verifyToken, userIDHandler.put);

//delete by id
router.delete("/:userId", verifyToken, userIDHandler.delete);

module.exports = router;
