const { json } = require("sequelize");
const { Customer } = require("../../../../models");

module.exports = async (req, res) => {
  const { customerId } = req.params;

  const customer = await Customer.findByPk(customerId);

  if (!customer)
    return res.status(404).json({
      message: "user not found",
    });

  await customer.destroy();

  return res.json({
    message: "customer deleted",
  });
};
