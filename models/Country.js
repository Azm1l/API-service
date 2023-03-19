module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "country_id",
      },
      country_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "country_name",
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Y",
        field: "status",
      },
      createdBy: {
        type: DataTypes.STRING,
        allowNull: true,
        field: "created_by",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at",
      },
    },
    { tableName: "country", timestamps: true }
  );
  return Country;
};
