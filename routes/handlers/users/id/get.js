const { User } = require("../../../../models");

module.exports = async (req, res) => {
  const { userId } = req.params;

  //console.log(req.user); buat cek siapa yang akses API

  const user = await User.findByPk(userId, {
    attributes: { exclude: ["password"] },
  });

  if (!user)
    return res.status(404).json({
      message: "User Not found",
    });

  return res.json(user);
};
