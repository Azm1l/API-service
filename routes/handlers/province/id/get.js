const { Province } = require("../../../../models");

module.exports = async (req, res) => {
  const { provinceId } = req.params;

  const getData = await Province.findByPk(provinceId);

  if (!getData)
    return res.status(404).json({
      message: "data not found...",
    });

  return res.json(getData);
};
