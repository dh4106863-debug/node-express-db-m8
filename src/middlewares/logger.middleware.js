const fs = require('fs');
const path = require('path');

const loggerMiddleware = (req, res, next) => {
    const now = new Date();
    const fecha = now.toISOString().split('T')[0];
    const hora = now.toTimeString().split(' ')[0];
    const logEntry = `[${fecha} ${hora}] Ruta accedida: ${req.method} ${req.originalUrl}\n`;

    //Apuntar a la carpeta 'logs' ubicada en la raíz del proyecto
    const logPath = path.join(__dirname, '../logs', 'log.txt');

    fs.appendFile(logPath, logEntry, (err) => {
        if (err) console.error("Error al escribir el log:", err);
    });

    next();
};

module.exports = loggerMiddleware; 
