var express = require("express");
const verifyToken = require("../middlewares/verify-token");
var router = express.Router();
const customerHandler = require("./handlers/customer");
const customerIdHandler = require("./handlers/customer/id");

router.get("/", verifyToken, customerHandler.get);

router.post("/", verifyToken, customerHandler.post);

router.get("/:customerId", verifyToken, customerIdHandler.get);

router.put("/:customerId", verifyToken, customerIdHandler.put);

router.delete("/:customerId", verifyToken, customerIdHandler.delete);

module.exports = router;
