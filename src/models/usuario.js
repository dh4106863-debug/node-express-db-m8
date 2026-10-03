const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  saldo: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
}, {
  tableName: 'usuarios',
  timestamps: true,
});

module.exports = Usuario;