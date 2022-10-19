module.exports = (sequelize, DataTypes) => {
  const Consignee = sequelize.define(
    "Consignee",
    {
      consigneeId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        field: "consignee_id",
      },
      consigneeType: {
        type: DataTypes.STRING,
        allowNull: false,
        upperCase: true,
        field: "consignee_type",
      },
      consigneeName: {
        type: DataTypes.STRING,
        allowNull: false,
        upperCase: true,
        field: "consignee_name",
      },
      consigneeAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        uppercase: true,
        field: "consignee_address",
      },
      consigneePhone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            arg: true,
            msg: "phone number only numeric",
          },
        },
        field: "consignee_phone",
      },
      consigneeEmail: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: {
            arg: true,
            msg: "email not valid",
          },
        },
        field: "consignee_email",
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
    { tableName: "consignee", timestamps: true }
  );
  return Consignee;
};
