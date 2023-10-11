// merubah file json menjadi js karena ingin memasukkan yang ada pada file .env
require('dotenv').config();

const {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOSTNAME
} = process.env;

module.export = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
