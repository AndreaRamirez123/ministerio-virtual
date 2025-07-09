
const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');


const sequelize = new Sequelize('ministerio_virtual_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ministerio_virtual_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = {
  sequelize,
  query: (...args) => pool.query(...args),
};
