// Obtención de los autores
// SELECT * FROM autores
const getAll = () => {
	return db.query('select * from autores');
}

module.exports = {
	getAll
}