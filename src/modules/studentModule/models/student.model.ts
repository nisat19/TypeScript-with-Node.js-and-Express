module.exports = (sequelize: any, DataTypes: any) => {
  const Student = sequelize.define("students", {
    student_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    g_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Student;
};
