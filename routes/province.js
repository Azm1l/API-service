var express = require("express");
var router = express.Router();
const provinceHandler = require("./handlers/province");
const provinceIdHandler = require("./handlers/province/id");

router.get("/:provinceId", provinceIdHandler.get);
router.delete("/:provinceId", provinceIdHandler.delete);
router.put("/:provinceId", provinceIdHandler.put);
router.get("/", provinceHandler.get);
router.post("/", provinceHandler.post);

module.exports = router;
