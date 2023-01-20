export default (database: any) => {
  database.grade.hasMany(database.student, {
    foreignKey: "g_id",
  });
};
