var express = require("express");
//const verifyToken = require("../middlewares/verify-token");
var router = express.Router();
const customerHandler = require("./handlers/customer");
const customerIdHandler = require("./handlers/customer/id");

router.get("/", customerHandler.get);

router.post("/", customerHandler.post);

router.get("/:customerId", customerIdHandler.get);

router.put("/:customerId", customerIdHandler.put);

router.delete("/:customerId", customerIdHandler.delete);

module.exports = router;
