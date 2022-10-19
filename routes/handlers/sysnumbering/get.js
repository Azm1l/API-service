const { sysNumbering } = require("../../../models");

module.exports = async (req, res) => {
  const numbering = await sysNumbering.findAll();

  return res.json(numbering);
};
