// Obtener todos los registros
// GET /api/autores
const all = (req, res) => {
	return res.status(200).send({
		status: "success",
		message: "Listado de autores"
	});
}

module.exports = {
	all
}