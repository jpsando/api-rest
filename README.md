# API REST
El proyecto está armado con NodeJS por lo cuál corre en un entorno de NGINX.

Se compone por:

* API para conectar con base de datos no relacional subida a cloud.mongodb.com; por la cual preparamos endpoints para diferentes acciones (leer datos, agregar datos, modificar datos, eliminar datos). Algunas de estas funciones se dejaron comentadas por cuestiones de seguridad.

Keywords: NodeJS, Heroku, Express, Mongo, Mongoose

## Levantar api local
1. Levantar una instancia local de MongoDB que exponga el puerto 27017.
2. Crear una base llamada "tiendajota" en MongoDB y modificar las credenciales por las correctas. Estas ultimas se pueden agregar a un archivo .env para mas facil utilizacion.
3. Levantar el servicio con el comando node index.js dentro de api/src. Opcionalmente se puede usar nodemon index.js si se va a trabajar sobre la API
