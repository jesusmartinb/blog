const { getAll, create, getAllPostsByAuthor, getOneAuthor, updateById, deleteById } = require('../models/autor.model');

// Obtener todos los registros
// GET /api/autores
const all = async (req, res) => {
	try {
		const [autores] = await getAll();
		if (!autores) return res.status(404).json({
			status: "error",
			msg: "No se han encontrado autores"
		})

		return res.status(200).json({
			status: "success",
			msg: "Listado de autores",
			autores
		})
	} catch (error) {
		res.json({ error: error.message })
	}
}

// Obtener un registro de autor y todos sus posts
// GET /api/autores/:id
const one = async (req, res) => {
	const { id } = req.params;

	try {

		const [autor] = await getOneAuthor(id);

		const [postsAutor] = await getAllPostsByAuthor(id);

		if (!autor) return res.status(404).json({
			status: "error",
			msg: "No hemos encontrado ningún autor con ese ID"
		})

		return res.status(200).json({
			status: "success",
			msg: `autor con el ID: ${id}`,
			autor,
			postsAutor
		})
	} catch (error) {
		res.json({ error: error.message })
	}

}

// Insertar un nuevo registro
// POST /api/autores
const register = async (req, res) => {
	try {
		const [autor] = await create(req.body);
		if (!autor) return res.status(404).json({
			status: "error",
			msg: "No se ha podido insertar el autor"
		})

		return res.status(200).json({
			status: "success",
			msg: "Autor registrado en la base de datos",
			autor
		})
	} catch (error) {
		res.json({ error: error.message })
	}
}

// Actualizar un registro
// PUT /api/autores/:id
const update = async (req, res) => {
	const { id } = req.params;
	try {
		await updateById(id, req.body);
		const [autor] = await getOneAuthor(id);
		if (!autor) return res.status(404).json({
			status: "error",
			msg: `No se ha encontrado el autor con ID: ${id}`
		})
		return res.status(200).json({
			status: "success",
			msg: `Actualización del autor con ID: ${id}`,
			autor: autor[0]
		});
	} catch (error) {
		res.json({ error: error.message })
	}

}

// Eliminar un registro
// DELETE /api/autores/:id
const erase = async (req, res) => {
	const { id } = req.params;
	try {
		const [autor] = await getOneAuthor(id);
		await deleteById(id);
		if (!autor) return res.status(404).json({
			status: "error",
			msg: `No se ha encontrado el autor con ID: ${id}`
		})
		return res.status(200).json({
			status: "success",
			msg: `Eliminación del autor con ID: ${id}`,
			autor: autor[0]
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