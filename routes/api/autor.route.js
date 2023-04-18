// Importar dependencias
const express = require('express');

// Cargar Router
const router = express.Router();

// Importamos controlador
const AutorController = require('../../controllers/autor.controller');


// Definir rutas
router.get('/', AutorController.all);
router.get('/:id', AutorController.one);
router.post('/', AutorController.register);
router.put('/:id', AutorController.update);
router.delete('/:id', AutorController.erase);

module.exports = router