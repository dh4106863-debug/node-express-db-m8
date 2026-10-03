const { Usuario, Pedido, sequelize } = require('../models');
const { Op } = require('sequelize');

class UsuarioService {
  //Consultas GET con filtros
  static async obtenerTodos(filtroNombre) {
    const where = {};
    if (filtroNombre) {
      where.nombre = { [Op.iLike]: `%${filtroNombre}%` };
    }
    return await Usuario.findAll({
      where,
      include: [{ model: Pedido, as: 'pedidos' }], //Incluir Relaciones
    });
  }

  static async obtenerPorId(id) {
    return await Usuario.findByPk(id, {
      include: [{ model: Pedido, as: 'pedidos' }],
    });
  }

  static async crear(datos) {
    return await Usuario.create(datos);
  }

  //Actualización (PUT)
  static async actualizar(id, datos) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return null;
    return await usuario.update(datos);
  }

  //Eliminación (DELETE)
  static async eliminar(id) {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return false;
    await usuario.destroy();
    return true;
  }

  //Transacción SQL ACID (Transferencia entre usuarios)
  static async transferirSaldo(origenId, destinoId, monto) {
    const t = await sequelize.transaction();
    try {
      const emisor = await Usuario.findByPk(origenId, { transaction: t });
      const receptor = await Usuario.findByPk(destinoId, { transaction: t });

      if (!emisor || !receptor) throw new Error('Usuarios no encontrados');
      if (Number(emisor.saldo) < monto) throw new Error('Saldo insuficiente');

      await emisor.update({ saldo: Number(emisor.saldo) - monto }, { transaction: t });
      await receptor.update({ saldo: Number(receptor.saldo) + monto }, { transaction: t });

      await t.commit(); //Confirmar cambios
      return { mensaje: 'Transacción realizada con éxito' };
    } catch (error) {
      await t.rollback(); //Revertir en caso de falla
      throw error;
    }
  }
}

module.exports = UsuarioService;