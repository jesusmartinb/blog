const { getAll, create, getAllPostsByAuthor, getOneAuthor } = require('../models/autor.model');

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
		res.json({ fatal: error.message })
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
		res.json({ fatal: error.message })
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
		res.json({ fatal: error.message })
	}
}

// Actualizar un registro
// PUT /api/autores/:id
const update = (req, res) => {
	const { id } = req.params;
	return res.status(200).send({
		status: "success",
		message: `Actualización del autor con ID: ${id}`
	});
}

// Eliminar un registro
// DELETE /api/autores/:id
const erase = (req, res) => {
	const { id } = req.params;
	return res.status(200).send({
		status: "success",
		message: `Eliminación del autor con ID: ${id}`
	});
}

module.exports = {
	all,
	one,
	register,
	update,
	erase
}