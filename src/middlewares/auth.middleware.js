const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  // 1. Buscamos el token en los encabezados (headers) de la petición
  const authHeader = req.headers['authorization'];
  
  // 2. Extraemos el token (viene con la palabra 'Bearer ', así que la limpiamos)
  const token = authHeader && authHeader.split(' ')[1];

  // 3. Si no mandó token, se le niega la entrada
  if (!token) {
    return res.status(401).json({ mensaje: 'No tienes permiso. Falta el token.' });
  }

  try {
    // 4. Verificamos que el token sea auténtico con nuestra clave secreta
    const datosUsuario = jwt.verify(token, process.env.JWT_SECRET);
    
    // 5. Guardamos los datos del usuario para que la ruta los conozca
    req.usuario = datosUsuario; 
    
    // 6. ¡Todo bien! Dejamos pasar la petición a la siguiente función
    next(); 
  } catch (error) {
    // Si el token expiró o es falso, rechazamos la petición
    return res.status(403).json({ mensaje: 'El token no es válido o ya venció.' });
  }
};

module.exports = verificarToken;