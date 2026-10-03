const express = require('express');
const router = express.Router();
const controller = require('../controllers/main.controller');

//Rutas base / Verificación del servidor
router.get('/', controller.getHome);
router.get('/status', controller.getStatus);

//CRUD de Usuarios
router.get('/usuarios', controller.getUsuarios);
router.get('/usuarios/:id', controller.getUsuarioById);
router.post('/usuarios', controller.createUsuario);
router.put('/usuarios/:id', controller.updateUsuario);
router.delete('/usuarios/:id', controller.deleteUsuario);
router.post('/usuarios/transferir', controller.transferir);

module.exports = router;