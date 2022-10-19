const { Customer, sysNumbering } = require("../../../models");

module.exports = async (req, res) => {
  const body = req.body;

  //validate customer
  if (
    !body.customerType ||
    !body.customerName ||
    !body.customerAddress ||
    !body.customerPhone ||
    !body.customerEmail
  )
    return res.status(400).json({
      message: "data must be provide",
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

  //get id customer
  const codeName = "CUST";
  const getNumber = await sysNumbering.findByPk(codeName);
  const data = getNumber.lastNumber + 1;

  const newId =
    getNumber.prefix.substr(
      0,
      getNumber.prefix.length - data.toString().length
    ) + data;

  try {
    //create customer
    const customer = await Customer.create({
      customerId: newId,
      customerType: body.customerType,
      customerName: body.customerName,
      customerAddress: body.customerAddress,
      customerPhone: body.customerPhone,
      customerEmail: body.customerEmail,
    });

    //update number
    await getNumber.update({
      lastNumber: data,
      updatedAt: Date.now(),
    });

    return res.json(customer);
  } catch (error) {
    const message = error.errors.map((e) => e.message).toString();

    return res.status(400).json({
      message: message,
    });
  }
};
