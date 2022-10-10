const { User } = require("../../../../models");

module.exports = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findByPk(userId);

  await user.destroy();
  return res.json({
    message: "User Deleted",
  });
};
