const { sysNumbering } = require("../../../../models");

module.exports = async (req, res) => {
  const { numberCode } = req.params;

  const data = await sysNumbering.findByPk(numberCode);

  if (!data)
    return res.status(404).json({
      message: "data not found",
    });

  await data.destroy();

  return res.json({
    message: "deleted data",
  });
};
