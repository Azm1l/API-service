var express = require("express");
var router = express.Router();
const userHandler = require("./handlers/users");
const userIDHandler = require("./handlers/users/id");

//Get Data User
router.get("/", userHandler.get);

//Get Data User By Id
router.get("/:userId", userIDHandler.get);

//update user by id
router.put("/:userId", userIDHandler.put);

//delete by id
router.delete("/:userId", userIDHandler.delete);

//Create User
router.post("/", userHandler.post);

module.exports = router;
