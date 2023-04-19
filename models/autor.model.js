// Obtención de los autores
// SELECT * FROM autores
const getAll = () => {
	return db.query('select * from autores');
}

// Recuperar un autor
const getOneAuthor = (autorId) => {
	return db.query('select a.nombre, a.email, a.imagen from blog_unir.autores as a where a.id = ?', [autorId]);
}

// Recuperación de los posts escritos por un mismo autor
const getAllPostsByAuthor = (autorId) => {
	return db.query("SELECT p.titulo, p.descripcion, p.fecha_creacion as 'fecha creación', p.categoria FROM blog_unir.posts as p WHERE p.fk_autores = (SELECT a.id FROM blog_unir.autores as a WHERE a.id = ?)", [autorId]);
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
	getOneAuthor,
	getAllPostsByAuthor,
	create
}