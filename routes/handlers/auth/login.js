const { User } = require("../../../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  const body = req.body;

  if (!body.name || !body.password)
    return res.status(400).json({
      message: "name and password must be provided",
    });

  //check user
  const user = await User.findOne({
    where: {
      name: body.name,
    },
  });

  if (!user)
    return res.status(400).json({
      message: "invalid username",
    });

  //validate password
  const validatePassword = await bcrypt.compareSync(
    body.password,
    user.password
  );

  if (!validatePassword)
    return res.status(400).json({
      message: "incorect password",
    });

  const data = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  const token = jwt.sign({ data }, "kumil");

  const obj = [];
  obj.push({ data, token });

  return res.json(obj);
};
