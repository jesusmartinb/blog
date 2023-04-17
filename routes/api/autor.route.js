// Importar dependencias
const express = require('express');

// Cargar Router
const router = express.Router();

// Importamos controlador
const AutorController = require('../../controllers/autor.controller');


// Definir rutas
router.get('/', AutorController.all);

module.exports = router