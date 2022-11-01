require("dotenv").config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER_NAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: process.env.MYSQL_DIALECT,
  },
  test: {
    username: "root",
    password: "jur4g4n.",
    database: "company-test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "jur4g4n.",
    database: "company-test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
