const { Province } = require("../../../../models");

module.exports = async (req, res) => {
  const { provinceId } = req.params;
  const body = req.body;

  const getData = await Province.findByPk(provinceId);
  if (!getData)
    return res.status(404).json({
      message: "data not found",
    });
  try {
    await getData.update({
      provinceName: body.provinceName,
      countryId: body.countryId,
      status: body.status,
    });
    return res.json({
      message: "data updated",
    });
  } catch (error) {
    const message = error.errors.map((e) => e.message).toString();
    return res.status(400).json({
      message: message,
    });
  }
};
