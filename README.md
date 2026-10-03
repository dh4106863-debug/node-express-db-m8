# Proyecto Node.js / Express / PostgreSQL - Módulo 7

Aplicación Backend desarrollada con **Node.js**, **Express** y **Sequelize ORM** sobre **PostgreSQL**, correspondiente al proyecto del Módulo 7.

## 🛠️ Tecnologías y Herramientas

- **Entorno de ejecución**: Node.js (v18+)
- **Framework**: Express.js
- **Base de Datos**: PostgreSQL
- **ORM**: Sequelize
- **Variables de Entorno**: dotenv
- **Cliente HTTP para Pruebas**: Thunder Client / Postman

## 📁 Arquitectura del Proyecto

El proyecto implementa una arquitectura modular limpia orientada en capas:

node_express_db/
├── node_modules/              # Dependencias instaladas del proyecto
├── public/                    # Archivos estáticos servidos por Express
│   ├── css/
│   │   └── style.css          # Estilos CSS de la interfaz
│   ├── js/
│   │   └── main.js            # Lógica JavaScript del lado del cliente
│   └── index.html             # Vista HTML principal
├── src/                       # Código fuente de la aplicación backend
│   ├── config/
│   │   └── db.js              # Configuración y conexión a PostgreSQL con Sequelize
│   ├── controllers/
│   │   └── main.controller.js # Controladores HTTP (manejo de req y res)
│   ├── logs/
│   │   └── log.txt            # Registro persistente de eventos y errores
│   ├── middlewares/
│   │   └── logger.middleware.js # Middleware personalizado para registro de peticiones
│   ├── models/
│   │   ├── index.js           # Inicialización y definición de asociaciones entre modelos
│   │   ├── pedido.js          # Modelo de datos de la entidad Pedido
│   │   └── usuario.js         # Modelo de datos de la entidad Usuario
│   ├── routes/
│   │   └── main.routes.js     # Definición de los endpoints de la API REST
│   ├── services/
│   │   └── usuario.service.js # Lógica de negocio, consultas ORM y transacciones ACID
│   └── utils/
│       └── response.util.js   # Helper estandarizado para respuestas JSON
├── .env                       # Variables de entorno confidenciales (no subido a Git)
├── .env.example               # Plantilla de ejemplo para variables de entorno
├── .gitignore                 # Archivos y carpetas excluidos del control de versiones
├── app.js                     # Punto de entrada del servidor Express
├── package-lock.json          # Árbol exacto de dependencias de npm
├── package.json               # Configuración del proyecto y scripts de ejecución
└── README.md                  # Documentación principal del proyecto

## INTALACIONES PREVIAS
# 1. Inicializar el proyecto 
npm init -y

# 2. Instalar dependencias del proyecto (Producción)
npm install express pg sequelize dotenv

# 3. Instalar dependencias de desarrollo
npm install -D nodemon

# Método,Endpoint,Descripción,Body (JSON)

| Método | Endpoint | Descripción | Body (JSON) |
| :--- | :--- | :--- | :--- |
| **GET** | `/usuarios` | Obtiene lista de usuarios (Soporta filtro `?nombre=`) | N/A |
| **GET** | `/usuarios/:id` | Obtiene usuario por ID e incluye sus pedidos anidados | N/A |
| **POST** | `/usuarios` | Crea un nuevo usuario | `{"nombre": "Carlos Perez", "email": "carlos@email.com", "saldo": 500}` |
| **PUT** | `/usuarios/:id` | Actualiza un usuario existente | `{"nombre": "Carlos Perez", "saldo": 15000}` |
| **DELETE** | `/usuarios/:id` | Elimina un usuario por ID | N/A |
| **POST** | `/usuarios/transferir` | Ejecuta la transferencia de saldo en una transacción | `{"origenId": 5, "destinoId": 6, "monto": 10.00}` |

# CAPTURAS ENDPOINT



# Justificaciones del ABP (Lecciones 1, 3 y 5)
Lección 1: Conexión a Base de Datos
¿Por qué elegiste ese cliente de conexión? 
Seleccione Sequelize debido a su capacidad para estructurar modelos orientados a objetos, gestionar migraciones y abstraer las consultas SQL de PostgreSQL de forma segura.  
¿Cómo se protegen los datos sensibles? 
Las claves de acceso, host, puerto y nombre de la base de datos se encapsulan en un archivo .env mediante la librería dotenv. El archivo .env está excluido del control de versiones mediante .gitignore.  

Lección 3: Modificación de Datos
¿Por qué decidiste actualizar solo ciertos campos? 
Para mantener la integridad de la información; existen campos inmutables como la clave primaria id o la fecha de creación createdAt que no deben ser alterados manualmente en peticiones HTTP.  
¿Qué validaciones aplicaste para evitar errores? 
Se verifica que el registro exista antes de modificarlo o eliminarlo (404 Not Found) y se gestiona la restricción de unicidad (unique) en el campo email para evitar duplicados en la base de datos.  

Lección 5: Acceso a Datos con ORM¿
¿Qué ventaja encontraste usando ORM frente al cliente SQL tradicional? 
Reduce el riesgo de inyección SQL mediante consultas parametrizadas automáticas, simplifica la carga de relaciones entre tablas usando include sin necesidad de redactar sentencias JOIN complejas y acelera el desarrollo al trabajar directamente con objetos de JavaScript.

# Resumen por Lección (1 al 6)
Lección 1 (Conexión a BD): Configuración de la conexión entre Express y PostgreSQL usando sequelize y aislamiento de credenciales en un archivo .env.  

Lección 2 (Lectura de Datos): Creación del endpoint GET /usuarios con capacidad de filtrado por nombre y manejo estandarizado de respuestas en formato JSON.  

Lección 3 (Modificación de Datos): Implementación de los métodos PUT y DELETE con verificación previa de existencia del ID.  

Lección 4 (Transaccionalidad): Desarrollo del endpoint de transferencia bancaria utilizando sequelize.transaction() para garantizar atomicidad mediante commit y rollback.  

Lección 5 (Acceso con ORM): Definición e inicialización de modelos orientados a objetos (Usuario) reemplazando consultas SQL crudas. 

Lección 6 (Relaciones en ORM): Asociación 1:N entre Usuario y Pedido, permitiendo traer usuarios con sus pedidos anidados mediante la opción include.


