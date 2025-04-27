const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false, // optional
  });

// Test connection
sequelize.authenticate()
  .then(() => console.log('Database connected via Sequelize'))
  .catch((err) => console.error('Unable to connect to DB:', err));

module.exports = sequelize;
