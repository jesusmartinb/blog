const { getAll, create, getById } = require('../models/post.model');

// Obtener todos los registros
// GET /api/posts
const all = async (req, res) => {
	try {
		const [posts] = await getAll();
		if (!posts) return res.status(404).json({
			status: "error",
			msg: "No se han encontrado posts"
		})

		return res.status(200).json({
			status: "success",
			msg: "Listado de posts",
			posts
		})
	} catch (error) {
		res.json({ fatal: error.message })
	}
}

// Obtener un registro
// GET /api/posts/:id
const one = async (req, res) => {
	const { id } = req.params;

	try {
		const [post] = await getById(id);
		if (!post && post.length === 0) {
			return res.status(404).json({
				status: "error",
				msg: "No hemos encontrado ningún post con ese ID"
			})
		}

		return res.status(200).json({
			status: "success",
			msg: `post con el ID: ${id}`,
			post: post[0]
		})
	} catch (error) {
		res.json({ fatal: error.message })
	}
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