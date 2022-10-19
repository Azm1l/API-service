var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var customerRouter = require("./routes/customer");
var consigneeRouter = require("./routes/consignee");
var sysnumberingRouter = require("./routes/sysnumbering");

var app = express();

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

module.exports = app;
