const multer = require('multer');
const path = require('path');

// Configuración de almacenamiento
const storage = multer.diskStorage({
  // Dónde guardamos la imagen
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  // Nombre único para el archivo (Ejemplo: 1712345678-mifoto.jpg)
  filename: (req, file, cb) => {
    const nombreUnico = Date.now() + '-' + file.originalname;
    cb(null, nombreUnico);
  }
});

// Filtro de tipos de archivo
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('El archivo debe ser una imagen'), false);
  }
};

// Guardamos la configuración en la variable 'upload'
const upload = multer({ 
    storage, 
    limits: { fileSize: 5 * 1024 * 1024 }
});

module.exports = upload;