const express = require('express');
const router = express.Router();

const autoresRouter = require('./api/autor.route');
const postsRouter = require('./api/post.route');

router.use('/autores', autoresRouter);
router.use('/posts', postsRouter);

module.exports = router;