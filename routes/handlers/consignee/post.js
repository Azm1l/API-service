const { Consignee, sysNumbering } = require("../../../models");

module.exports = async (req, res) => {
  const body = req.body;

  //validate consignee
  if (
    !body.consigneeName ||
    !body.consigneeEmail ||
    !body.consigneeAddress ||
    !body.consigneePhone
  )
    return res.status(400).json({
      message: "data must be provided",
    });

  const isEmailUsed = await Consignee.findOne({
    where: {
      consigneeEmail: body.consigneeEmail,
    },
  });

  if (isEmailUsed)
    return res.status(400).json({
      message: "email already taken",
    });

  //get id consignee
  const codeName = "CNEE";
  const getNumber = await sysNumbering.findByPk(codeName);
  const data = getNumber.lastNumber + 1;

  const newId =
    getNumber.prefix.substr(
      0,
      getNumber.prefix.length - data.toString().length
    ) + data;

  try {
    //create data
    const consignee = await Consignee.create({
      consigneeId: newId,
      consigneeType: body.consigneeType,
      consigneeName: body.consigneeName,
      consigneeAddress: body.consigneeAddress,
      consigneePhone: body.consigneePhone,
      consigneeEmail: body.consigneeEmail,
    });

    //update number
    await getNumber.update({
      lastNumber: data,
      updatedAt: Date.now(),
    });

    return res.json(consignee);
  } catch (error) {
    const message = error.errors.map((e) => e.message).toString();

    return res.status(400).json({
      message: message,
    });
  }
};
