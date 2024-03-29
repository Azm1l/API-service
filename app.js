var express = require("express");
var path = require("path");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var customerRouter = require("./routes/customer");
var consigneeRouter = require("./routes/consignee");
var sysnumberingRouter = require("./routes/sysnumbering");
var provinceRouter = require("./routes/province");
var countryRouter = require("./routes/country");

var app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//ini route
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/customer", customerRouter);
app.use("/consignee", consigneeRouter);
app.use("/sysnumbering", sysnumberingRouter);
app.use("/province", provinceRouter);
app.use("/country", countryRouter);

module.exports = app;
