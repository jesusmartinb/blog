// Importar dependencias
const express = require('express');

// Cargar Router
const router = express.Router();

// Importamos controlador
const PostController = require('../../controllers/post.controller');


// Definir rutas
router.get('/', PostController.all);
router.get('/:id', PostController.one);
router.post('/', PostController.register);
router.put('/:id', PostController.update);
router.delete('/:id', PostController.erase);

module.exports = router