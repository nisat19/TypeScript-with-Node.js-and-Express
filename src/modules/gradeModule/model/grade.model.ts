module.exports = (sequelize: any, DataTypes: any) => {
  const Grade = sequelize.define("grades", {
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Grade;
};
