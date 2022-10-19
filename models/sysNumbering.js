module.exports = (sequelize, DataTypes) => {
  const sysNumbering = sequelize.define(
    "sysNumbering",
    {
      numberCode: {
        type: DataTypes.STRING(4),
        allowNull: false,
        primaryKey: true,
        field: "number_code",
      },
      prefix: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      lastNumber: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: 0,
        field: "last_number",
      },
      lastBy: {
        type: DataTypes.STRING(20),
        allowNull: true,
        field: "last_by",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "updated_at",
      },
    },
    { tableName: "sys_numbering", timestamps: false }
  );
  return sysNumbering;
};
