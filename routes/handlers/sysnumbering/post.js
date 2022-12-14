const { sysNumbering } = require("../../../models");

module.exports = async (req, res) => {
  const body = req.body;

  const isDuplicated = await sysNumbering.findByPk(body.numberCode);

  if (isDuplicated)
    return res.status(400).json({
      message: "number code is already used",
    });

  try {
    const numbering = await sysNumbering.create({
      numberCode: body.numberCode,
      prefix: body.prefix,
      updatedAt: Date.now(),
    });
    return res.json(numbering);
  } catch (error) {
    const message = error.message;
    return res.status(400).json({
      message: message,
    });
  }
};
