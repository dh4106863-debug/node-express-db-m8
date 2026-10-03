const express = require('express');
const router = express.Router();

// Traemos el controlador de autenticación
const { login } = require('../controllers/auth.controller');

// Ruta Pública de Login
router.post('/login', login);

module.exports = router;