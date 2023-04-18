// Obtención de los autores
// SELECT * FROM autores
const getAll = () => {
	return db.query('select * from autores');
}

// Creación de un nuevo registro de autor
// insert into autores (nombre, email, imagen) values (?, ?, ?)
const create = ({ nombre, email, imagen = 'images/default.jpg' }) => {
	return db.query(
		'insert into autores (nombre, email, imagen) values (?, ?, ?)',
		[nombre, email, imagen]
	)
}

module.exports = {
	getAll,
	create
}