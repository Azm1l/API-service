const { Customer } = require("../../../models");

module.exports = async (req, res) => {
  const body = req.body;

  if (
    !body.customerType ||
    !body.customerName ||
    !body.customerAddress ||
    !body.customerPhone ||
    !body.customerEmail
  )
    return res.status(400).json({
      message: "data must be provided",
    });

  const isNameUsed = await Customer.findOne({
    where: {
      customerName: body.customerName,
    },
  });

  if (isNameUsed)
    return res.status(400).json({
      message: "name already taken",
    });

  const isEmailUsed = await Customer.findOne({
    where: {
      customerEmail: body.customerEmail,
    },
  });

  if (isEmailUsed)
    return res.status(400).json({
      message: "email already taken",
    });

  const customer = await Customer.create({
    customerType: body.customerType.toUpperCase(),
    customerName: body.customerName.toUpperCase(),
    customerAddress: body.customerAddress,
    customerPhone: body.customerPhone,
    customerEmail: body.customerEmail,
  });

  return res.json(customer);
};
