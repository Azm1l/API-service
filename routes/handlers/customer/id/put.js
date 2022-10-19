const { Customer } = require("../../../../models");

module.exports = async (req, res) => {
  const { customerId } = req.params;
  const body = req.body;

  const customer = await Customer.findByPk(customerId);

  if (!customer)
    return res.status(404).json({
      message: "user not found",
    });

  try {
    await customer.update({
      customerType: body.customerType,
      customerName: body.customerName,
      customerAddress: body.customerAddress,
      customerPhone: body.customerPhone,
      customerEmail: body.customerEmail,
    });

    return res.json(customer);
  } catch (error) {
    const message = error.errors.map((e) => e.message).toString();
    return res.status(400).json({
      message: message,
    });
  }
};
