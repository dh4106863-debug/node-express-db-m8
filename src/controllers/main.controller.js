/* const path = require('path');
//Retorna la vista principal en HTML
const getHomeHTML = (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'index.html'));
};
//Retorna la respuesta en HTML dinámico con EJS
const getHome = (req, res) => {
    res.render('index', { 
        titulo: 'Bienvenido a la Web App de Gestión' 
    });
};
//Retorna la respuesta en formato JSON con el estado del sistema
const getStatus = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "El servidor está operando sin problemas",
        timestamp: new Date()
    });
};

module.exports = {
    getHome,
    getStatus
}; */

const UsuarioService = require('../services/usuario.service');
const response = require('../utils/response.util');

const getHome = (req, res) => res.send('<h1>Servidor Operativo - Módulo 7</h1>');
const getStatus = (req, res) => res.json({ status: 'online', uptime: process.uptime() });

//GET /usuarios
const getUsuarios = async (req, res) => {
  try {
    const { nombre } = req.query;
    const usuarios = await UsuarioService.obtenerTodos(nombre);
    return response(res, 200, true, usuarios);
  } catch (err) {
    return response(res, 500, false, null, err.message);
  }
};

const getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await UsuarioService.obtenerPorId(id);
    if (!usuario) return response(res, 404, false, null, 'Usuario no encontrado');
    return response(res, 200, true, usuario);
  } catch (err) {
    return response(res, 500, false, null, err.message);
  }
    
};

const createUsuario = async (req, res) => {
  try {
    const nuevo = await UsuarioService.crear(req.body);
    return response(res, 201, true, nuevo);
  } catch (err) {
    return response(res, 400, false, null, err.message);
  }
};

//PUT /usuarios/:id
const updateUsuario = async (req, res) => {
  try {
    const actualizado = await UsuarioService.actualizar(req.params.id, req.body);
    if (!actualizado) return response(res, 404, false, null, 'Usuario no encontrado');
    return response(res, 200, true, actualizado);
  } catch (err) {
    return response(res, 400, false, null, err.message);
  }
};

//DELETE /usuarios/:id
const deleteUsuario = async (req, res) => {
  try {
    const borrado = await UsuarioService.eliminar(req.params.id);
    if (!borrado) return response(res, 404, false, null, 'Usuario no encontrado');
    return response(res, 200, true, null, 'Usuario eliminado correctamente');
  } catch (err) {
    return response(res, 500, false, null, err.message);
  }
};

//POST /usuarios/transferir
const transferir = async (req, res) => {
  const { origenId, destinoId, monto } = req.body;
  try {
    const resultado = await UsuarioService.transferirSaldo(origenId, destinoId, Number(monto));
    return response(res, 200, true, resultado);
  } catch (err) {
    return response(res, 400, false, null, err.message);
  }
};

module.exports = {
  getHome,
  getStatus,
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  transferir,
};