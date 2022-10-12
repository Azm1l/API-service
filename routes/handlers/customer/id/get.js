const { Customer } = require("../../../../models");

module.exports = async (req, res) => {
  const { customerId } = req.params;

  const customer = await Customer.findByPk(customerId);

  if (!customer)
    return res.status(404).json({
      message: "customer not found",
    });

  return res.json(customer);
};
