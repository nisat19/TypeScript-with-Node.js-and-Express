import gradeStudentAssociation from "./gradeModule/association/gradeStudent.association";

const dbConfig = require("../database/db.config.ts");

export const Sequelize = require("sequelize");
export const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
    dialectOptions: {
      instanceName: "instance",
      options: {
        encrypt: true,
        trustServerCertificate: true,
        requestTimeout: 30000,
      },
    },
  }
);

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database: ", error);
//   });

export const database: any = {};

database.student = require("./studentModule/models/student.model.ts")(
  sequelize,
  Sequelize
);
database.grade = require("./gradeModule/model/grade.model.ts")(
  sequelize,
  Sequelize
);

gradeStudentAssociation(database);

database.Sequelize = Sequelize;
database.sequelize = sequelize;
export const DATABASE = database;
