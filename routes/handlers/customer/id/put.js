const { Customer } = require("../../../../models");

module.exports = async (req, res) => {
  const { customerId } = req.params;
  const body = req.body;

  const customer = await Customer.findByPk(customerId);

  if (!customer)
    return res.status(404).json({
      message: "user not found",
    });

  await customer.update({
    customerType: body.customerType.toUpperCase(),
    customerName: body.customerName.toUpperCase(),
    customerAddress: body.customerAddress.toUpperCase(),
    customerPhone: body.customerPhone,
    customerEmail: body.customerEmail,
  });

  return res.json({
    message: "customer updated",
    customer,
  });
};
