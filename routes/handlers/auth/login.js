const { User } = require("../../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const body = req.body;

  const user = await User.findOne({
    where: {
      name: body.name,
    },
  });

  if (!user)
    return res.status(400).json({
      message: "invalid username",
    });

  const validatePassword = await bcrypt.compare(body.password, user.password);

  if (!validatePassword)
    return res.status(400).json({
      message: "incorrect password",
    });

  return res.json({
    message: "login succes",
  });
};
