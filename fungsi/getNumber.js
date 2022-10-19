const { sysNumbering } = require("../models");

module.exports = async (codeName) => {
  const getNumber = await sysNumbering.findByPk(codeName);

  const data = getNumber.lastNumber + 1;

  const newId =
    getNumber.prefix.substr(
      0,
      getNumber.prefix.length - data.toString().length
    ) + data;

  await sysNumbering.update({
    lastNumber: data,
    updatedAt: Date.now(),
  });

  return newId;
};
