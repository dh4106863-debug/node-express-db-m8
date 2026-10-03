const express = require('express');
const router = express.Router();

// Traemos los controladores y middlewares necesarios
const { subirFoto } = require('../controllers/auth.controller');
const verificarToken = require('../middlewares/auth.middleware');
const upload = require('../middlewares/upload.middleware');

// Ruta Protegida para subir archivo/foto
router.post('/subir-foto', verificarToken, upload.single('foto'), subirFoto);

module.exports = router;