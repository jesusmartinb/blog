// Obtener todos los registros
// GET /api/autores
const all = (req, res) => {
	return res.status(200).send({
		status: "success",
		message: "Listado de autores"
	});
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
const register = (req, res) => {
	console.log(req.body);
	return res.status(200).send({
		status: "success",
		message: "Registro de un nuevo autor"
	});
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