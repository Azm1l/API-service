const { User } = require("../../../../models");
const bycrpt = require("bcrypt");
const { json } = require("sequelize");

module.exports = async (req, res) => {
  const { userId } = req.params;
  const body = req.body;

  const user = await User.findByPk(userId);

  const password = await bycrpt.hashSync(body.password, 10);

  if (!user)
    return res.status(404).json({
      message: "User not Found",
    });

  await user.update({
    name: body.name,
    email: body.email,
    password: password,
  });

  return res.json({
    message: "user updated",
    user,
  });
};
