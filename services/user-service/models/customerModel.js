const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Customer = sequelize.define('Customer', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  uuid: {
    type: DataTypes.UUID, // Cognito User Sub
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true, // Optional for customers
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true, // Optional for customers
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active',
    allowNull: false,
  },
}, {
  timestamps: true,
  tableName: 'customers', // Table name will be 'customers' now
});

module.exports = Customer;
