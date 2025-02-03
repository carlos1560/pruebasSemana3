const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt'); // Para encriptar contraseñas
const jwt = require('jsonwebtoken'); // Para autenticación JWT
const app = express();
const port = 3306;

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_tareas'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos establecida');
});

app.use(express.json());

// Middleware para autenticación JWT
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'tu_secreto_jwt', (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Rutas
const tareasRoutes = require('./rutas/tareas');
const usuariosRoutes = require('./rutas/usuarios');
app.use('/api/tareas', authenticateJWT, tareasRoutes); // Rutas protegidas
app.use('/api/usuarios', usuariosRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});