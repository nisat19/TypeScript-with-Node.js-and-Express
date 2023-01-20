module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'root',
  DB: 'node_test',
  dialect: 'mysql',
  PORT: 8889,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}
