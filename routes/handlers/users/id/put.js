const { User } = require("../../../../models");
const bycrpt = require("bcrypt");

module.exports = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findByPk(userId);

  const password = await bycrpt.hashSync(user.password, 10);

  if (!user)
    return res.status(404).json({
      message: "User not Found",
    });

  await user.update({
    name: user.name,
    email: user.email,
    password,
  });
  return res.json(user);
};
