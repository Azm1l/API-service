const { Consignee } = require("../../../../models");

module.exports = async (req, res) => {
  const { consigneeId } = req.params;

  const consignee = await Consignee.findByPk(consigneeId);

  if (!consignee)
    return res.status(404).json({
      message: "consignee not found",
    });

  return res.json(consignee);
};
