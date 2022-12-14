module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",
    {
      customerId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        field: "customer_id",
      },
      customerType: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "customer_type",
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "customer_name",
      },
      customerAddress: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "customer_address",
      },
      customerPhone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: {
            arg: true,
            msg: "phone number only numeric",
          },
        },
        field: "customer_phone",
      },
      customerEmail: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isEmail: {
            arg: true,
            msg: "email not valid",
          },
        },
        field: "customer_email",
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
    { tableName: "customer", timestamps: true }
  );
  return Customer;
};
