const { User } = require("../../../models");
const bcrypt = require("bcrypt");

module.exports = async (req, res) => {
  const body = req.body;

  if (!body.name || !body.email || !body.password)
    return res.status(400).json({
      message: "nama, email, and password must be provided",
    });
  const password = await bcrypt.hashSync(body.password, 10);

  const isUserUsed = await User.findOne({
    where: {
      name: body.name,
    },
  });

  if (isUserUsed)
    return res.status(400).json({
      message: "name already taken",
    });

  const isEmailUsed = await User.findOne({
    where: {
      email: body.email,
    },
  });

  if (isEmailUsed)
    return res.status(400).json({
      message: "email already taken",
    });

  const user = await User.create({
    name: body.name,
    email: body.email,
    password,
  });

  return res.json({
    id: user.id,
    name: user.name,
    email: user.email,
  });
};
