# Proyecto Node.js / Express / PostgreSQL - Módulo 8 (API RESTful)

Aplicación Backend RESTful segura desarrollada con **Node.js**, **Express**, **Sequelize ORM** sobre **PostgreSQL**, con autenticación **JWT** y gestión de subida de archivos (**Multer**).

## 🛠️ Tecnologías y Herramientas

- **Entorno de ejecución**: Node.js (v18+)
- **Framework**: Express.js
- **Base de Datos**: PostgreSQL
- **ORM**: Sequelize
- **Autenticación & Seguridad**: JSON Web Token (`jsonwebtoken`)
- **Gestión de Archivos**: Multer
- **Variables de Entorno**: dotenv
- **Cliente HTTP para Pruebas**: Postman / Thunder Client

## 📁 Arquitectura del Proyecto

<img width="1598" height="3390" alt="carbon" src="https://github.com/user-attachments/assets/9950b455-755a-4a41-87a7-51df3f62ceed" />



## INTALACIONES PREVIAS
# 1. Inicializar el proyecto 
npm init -y

# 2. Instalar dependencias del proyecto (Producción)
npm install express pg sequelize dotenv

# 3. Instalar dependencias de desarrollo
npm install nodemon

Guía de Autenticación con JWT
Obtener el Token:
Envía una petición POST a /api/auth/login con tus credenciales. Si la autenticación es correcta, recibirás una respuesta JSON con el valor del token.

Consumir Rutas Protegidas:
Para acceder a endpoints protegidos (ej. /api/upload/subir-foto o la creación/actualización de usuarios), debes adjuntar el token en el encabezado (Header) de la petición: Authorization: Bearer <TU_TOKEN_JWT_AQUI>

# Endpoints de la API RESTful

<img width="893" height="226" alt="a99dfa42-1f31-496d-8faa-9856bb599637" src="https://github.com/user-attachments/assets/d32716ba-7e14-4382-86b0-9c470c890579" />


# CAPTURAS ENDPOINT
<img width="779" height="696" alt="3aa647da-2e6a-4e52-94ee-c077ec0a80ca" src="https://github.com/user-attachments/assets/b85199a9-8a05-44d3-9167-ba4a51cd045b" />

<img width="783" height="688" alt="6d52dbcc-4329-4692-bb1f-25c78f5ecb71" src="https://github.com/user-attachments/assets/b4ba26a6-2c77-483a-bfce-5ac68727283d" />

<img width="772" height="665" alt="18c3b44b-c2d1-4f2b-b6c6-56a35905c3be" src="https://github.com/user-attachments/assets/7cfd8891-410e-4f00-a8a8-c039c8eed519" />


# Justificaciones del ABP 
Módulo 8: API RESTful, Seguridad y Archivos
¿Por qué se separaron las rutas y controladores en archivos independientes?
Para cumplir con el principio de responsabilidad única y facilitar la escalabilidad. Mover la lógica de subida de archivos a upload.controller.js y separar las rutas en auth.routes.js, main.routes.js y upload.routes.js evita acoplamiento y simplifica el mantenimiento.

¿Por qué se decidieron proteger ciertas rutas con JWT?
Las rutas de lectura de usuarios se dejaron públicas para facilitar la consulta general, mientras que las operaciones que modifican la base de datos (POST, PUT, DELETE, transferir) y la subida de archivos a almacenamiento local se protegieron para prevenir modificaciones no autorizadas, suplantación de identidad o saturación del almacenamiento del servidor.

¿Qué validaciones y controles se aplicaron en la subida de archivos?
En upload.middleware.js se implementó multer con restricciones estrictas de tipo de archivo (validando que el formato pertenezca a imágenes image/jpeg, image/png) y un límite de tamaño máximo (2 MB) para evitar la subida de ejecutables maliciosos o archivos demasiado grandes.

# Resumen de Aprendizajes por Módulo

Módulo 6 (Estructura y Servidor): Configuración inicial del servidor Express, servidor de archivos estáticos (/public), sistema de registro (logs) en archivos planos y manejo básico de rutas HTTP.

Módulo 7 (Base de Datos y ORM): Integración con PostgreSQL mediante Sequelize, modelado de entidades con relaciones (1:N), operaciones CRUD completas y transacciones ACID atómicas.

Módulo 8 (API RESTful, JWT y Uploads): Estandarización RESTful de endpoints, securización de rutas privadas utilizando JSON Web Tokens (JWT), encriptación de credenciales y gestión de carga de archivos multimedia con Multer.

