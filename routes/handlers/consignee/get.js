const { Consignee } = require("../../../models");

module.exports = async (req, res) => {
  const consignee = await Consignee.findAll();

  return res.json(consignee);
};
