const { User } = require("../../../models");

//Get Data User
module.exports = async (req, res) => {
  const user = await User.findAll();
  return res.json(user);
};
