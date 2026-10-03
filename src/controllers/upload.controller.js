// ACCIÓN 2: Subir Foto
const subirFoto = (req, res) => {
  // Le devolvemos la ruta de la foto que acaba de subirse
  return res.json({
    status: 'exito',
    message: 'Foto guardada correctamente',
    rutaFoto: `/uploads/${req.file.filename}`
  });
};