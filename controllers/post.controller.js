const { getAll, create } = require('../models/post.model');

// Obtener todos los registros
// GET /api/autores
const all = async (req, res) => {
	try {
		const posts = await getAll();
		if (!posts[0]) return res.status(404).json({
			status: "error",
			msg: "No se han encontrado posts"
		})

		return res.status(200).json({
			status: "success",
			msg: "Listado de posts",
			posts: posts[0]
		})
	} catch (error) {
		throw new Error(error)
	}
}

// Obtener un registro
// GET /api/autores/:id
const one = (req, res) => {
	const { id } = req.params;
	return res.status(200).send({
		status: "success",
		message: `Lista el post con ID: ${id}`
	});
}

// Insertar un nuevo registro
// POST /api/autores
const register = async (req, res) => {
	try {
		const [post] = await create(req.body);
		if (![post]) return res.status(404).json({
			status: "error",
			msg: "No se ha podido insertar el post"
		})

		return res.status(200).json({
			status: "success",
			msg: "Post registrado en la base de datos",
			post
		})
	} catch (error) {
		throw new Error(error);
	}
}

// Actualizar un registro
// PUT /api/autores/:id
const update = (req, res) => {
	const { id } = req.params;
	return res.status(200).send({
		status: "success",
		message: `Actualización del post con ID: ${id}`
	});
}

// Eliminar un registro
// DELETE /api/autores/:id
const erase = (req, res) => {
	const { id } = req.params;
	return res.status(200).send({
		status: "success",
		message: `Eliminación del post con ID: ${id}`
	});
}

module.exports = {
	all,
	one,
	register,
	update,
	erase
}