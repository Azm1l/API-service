const { sequelize } = require("../../../models");

module.exports = async (req, res) => {
  const body = req.body;

  try {
    const data = await sequelize.query(
      "CALL InsCountry (:country_name, :status)",
      { replacements: { country_name: body.countryName, status: body.status } }
    );
    return res.json({
      success: true,
      message: "success",
    });
  } catch (error) {
    const message = error.errors
      .map((ValidationErrorItem) => ValidationErrorItem.message)
      .toString();
    return res.status(400).json({
      success: false,
      message: message,
    });
  }
};
