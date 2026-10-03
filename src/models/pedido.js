const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(20),
    defaultValue: 'pendiente',
  },
}, {
  tableName: 'pedidos',
  timestamps: true,
});

module.exports = Pedido;