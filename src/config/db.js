/* const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error al conectar a la base de datos:', err.stack);
  }
  console.log('Conexión exitosa a la base de datos PostgreSQL');
  release();
});

module.exports = pool; */

const { Sequelize } = require('sequelize');
require('dotenv').config();

//Se declara la constante leyendo la variable del .env
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false, //Desactiva logs SQL en consola
  }
);

module.exports = sequelize;