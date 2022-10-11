const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  //cek token
  if (!token)
    return res.status(403).json({
      message: "incorrect credential",
    });

  const JWTToken = token.split(" ").pop();

  //try catch agar tidak crash
  try {
    //verify token
    const data = jwt.verify(JWTToken, "kumil");

    const user = await User.findByPk(data.data.id);

    if (!user)
      return res.status(404).json({
        message: "user not found",
      });

    req.user = user;

    next();
  } catch (error) {
    return res.status(403).json({
      message: "incorrect credential",
    });
  }
};
