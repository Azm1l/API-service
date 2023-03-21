module.exports = (sequelize, DataTypes) => {
  const Province = sequelize.define(
    "Province",
    {
      provinceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: "province_id",
      },
      provinceName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: "province_name",
      },
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            arg: true,
            msg: "country id only numeric",
          },
        },
        field: "country_id",
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
    { tableName: "province", timestamps: true }
  );
  return Province;
};
