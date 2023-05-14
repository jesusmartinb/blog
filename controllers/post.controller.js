const { getAll, create, getById, updateById, deleteById } = require('../models/post.model');

// Obtener todos los registros
// GET /api/posts
const all = async (req, res) => {
	try {
		const [posts] = await getAll();
		if (posts.length === 0) return res.status(404).json({
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
		if (post.length === 0) {
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
// POST /api/posts
const register = async (req, res) => {
	try {
		const [result] = await create(req.body);
		const [post] = await getById(result.insertId);
		if (post.length === 0) return res.status(404).json({
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
// PUT /api/posts/:id
const update = async (req, res) => {
	const { id } = req.params;

	try {
		await updateById(id, req.body);
		const [post] = await getById(id);
		if (post.length === 0) return res.status(404).json({
			status: "error",
			msg: `No se ha encontrado en post con ID: ${id}`
		})

		return res.status(200).json({
			status: "success",
			msg: `Actualización del post con ID: ${id}`,
			post: post[0]
		})
	} catch (error) {
		res.json({ error: error.message })
	}

}

// Eliminar un registro
// DELETE /api/posts/:id
const erase = async (req, res) => {
	const { id } = req.params;
	try {
		const [post] = await getById(id);
		await deleteById(id);
		if (post.length === 0) return res.status(404).json({
			status: "error",
			msg: `No se ha encontrado el post con ID: ${id}`
		})
		return res.status(200).json({
			status: "success",
			msg: `Eliminación del post con ID: ${id}`,
			post: post[0]
		});
	} catch (error) {
		res.json({ error: error.message })
	}

}

module.exports = {
	all,
	one,
	register,
	update,
	erase
}