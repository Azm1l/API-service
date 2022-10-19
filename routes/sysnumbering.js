var express = require("express");
//const verifyToken = require("../middlewares/verify-token");
var router = express.Router();
const sysNumberingHandler = require("./handlers/sysnumbering");
const sysNumberingIdHandler = require("./handlers/sysnumbering/id");

router.get("/", sysNumberingHandler.get);
router.post("/", sysNumberingHandler.post);

router.delete("/:numberCode", sysNumberingIdHandler);

module.exports = router;
