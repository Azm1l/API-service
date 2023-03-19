var express = require("express");
var router = express.Router();
const countryHandler = require("./handlers/country");

router.post("/", countryHandler.post);

module.exports = router;
