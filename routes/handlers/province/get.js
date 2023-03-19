const { Province } = require("../../../models");

module.exports = async (req, res) => {
  const Provinces = await Province.findAll();

  return res.json(Provinces);
};
