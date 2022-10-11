const { User } = require("../../../models");

//Get Data User
module.exports = async (req, res) => {
  const user = await User.findAll({
    attributes: { exclude: ["password"] },
  });
  return res.json(user);
};
