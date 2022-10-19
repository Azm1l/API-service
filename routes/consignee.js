var express = require("express");
const verifyToken = require("../middlewares/verify-token");
var router = express.Router();
const consigneeHandler = require("./handlers/consignee");
const consigneeIdHandler = require("./handlers/consignee/id");

router.get("/", consigneeHandler.get);
router.post("/", consigneeHandler.post);

router.get("/:consigneeId", consigneeIdHandler.get);
router.put("/:consigneeId", consigneeIdHandler.put);

module.exports = router;
