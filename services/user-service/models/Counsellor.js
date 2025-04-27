const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Counsellor = sequelize.define('Counsellor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  uuid: {
    type: DataTypes.UUID,
    allowNull: false,
    unique: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  specialization: { type: DataTypes.STRING, allowNull: false },
  experience: { type: DataTypes.INTEGER }, // years
  available: { type: DataTypes.BOOLEAN, defaultValue: true },
}, {
  timestamps: true,
});

module.exports = Counsellor;
