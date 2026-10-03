const jwt = require('jsonwebtoken');

// ACCIÓN 1: Iniciar Sesión (Login)
const login = (req, res) => {
  const { email, password } = req.body;

  // Verificamos si los datos ingresados son correctos
  if (email === "admin@test.com" && password === "123456") {
    
    // Creamos la "credencial digital" (Token) que dura 2 horas
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '2h' });

    // Se la devolvemos al usuario
    return res.json({
      status: 'exito',
      message: 'Sesión iniciada con éxito',
      token: token
    });
  }

  // Si se equivocó de clave
  return res.status(401).json({ status: 'error', message: 'Datos incorrectos' });
};



module.exports = { login, subirFoto };