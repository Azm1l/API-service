const { Consignee } = require("../../../../models");

module.exports = async (req, res) => {
  const { consigneeId } = req.params;
  const body = req.body;

  const consignee = await Consignee.findByPk(consigneeId);

  if (!consignee)
    return res.status(404).json({
      message: "consignee not found",
    });

  try {
    await consignee.update({
      consigneeType: body.consigneeType,
      consigneeName: body.consigneeName,
      consigneeAddress: body.consigneeAddress,
      consigneePhone: body.consigneePhone,
      consigneeEmail: body.consigneeEmail,
    });

    return res.json(consignee);
  } catch (error) {
    const message = error.errors.map((e) => e.message).toString();
    return res.status(400).json({
      message: message,
    });
  }
};
