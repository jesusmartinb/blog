const { getAll, create } = require('../models/autor.model');

// Obtener todos los registros
// GET /api/autores
const all = async (req, res) => {
	try {
		const autores = await getAll();
		if (!autores[0]) return res.status(404).json({
			status: "error",
			msg: "No se han encontrado autores"
		})

		return res.status(200).json({
			status: "success",
			msg: "Listado de autores",
			autores: autores[0]
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
		message: `Lista el autor con ID: ${id}`
	});
}

// Insertar un nuevo registro
// POST /api/autores
const register = async (req, res) => {
	try {
		const [autor] = await create(req.body);
		if (![autor]) return res.status(404).json({
			status: "error",
			msg: "No se ha podido insertar el autor"
		})

		return res.status(200).json({
			status: "success",
			msg: "Autor registrado en la base de datos",
			autor
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