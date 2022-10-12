const { Customer } = require("../../../models");

module.exports = async (req, res) => {
  const customer = await Customer.findAll();

  return res.json(customer);
};
