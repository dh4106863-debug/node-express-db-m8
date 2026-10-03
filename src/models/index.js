const sequelize = require('../config/db');
const Usuario = require('./Usuario');
const Pedido = require('./Pedido');

// Un Usuario tiene muchos Pedidos
Usuario.hasMany(Pedido, { foreignKey: 'usuarioId', as: 'pedidos' });
Pedido.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

module.exports = {
  sequelize,
  Usuario,
  Pedido,
};