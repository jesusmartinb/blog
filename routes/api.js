const express = require('express');
const router = express.Router();

const autoresRouter = require('./api/autor.route');

router.use('/autores', autoresRouter);

module.exports = router;