const { Province } = require("../../../models");

module.exports = async (req, res) => {
  const body = req.body;

  const isUsed = await Province.findOne({
    where: {
      provinceName: body.provinceName,
    },
  });

  if (isUsed)
    return res.status(400).json({
      message: "Province Name Already Exist..",
    });

  try {
    const provinces = await Province.create({
      provinceName: body.provinceName,
      countryId: body.countryId,
      status: body.status,
    });
    return res.json({
      message: "success",
    });
  } catch (error) {
    const message = error.message;
    return res.status(400).json({
      message: message,
    });
  }
};
