// Obtención de los posts
// SELECT * FROM posts
const getAll = () => {
	return db.query('select * from posts');
}

// Creación de un nuevo registro de post
// insert into posts (descripcion, fecha_creacion, categoria, fk_autores) values (?, ?, ?, ?)
const create = ({ descripcion, fecha_creacion = new Date(), categoria, fk_autores }) => {
	fecha_creacion = fecha_creacion.getFullYear() + "-" + (fecha_creacion.getMonth() + 1) + "-" + fecha_creacion.getDate();

	return db.query(
		'insert into posts (descripcion, fecha_creacion, categoria, fk_autores) values (?, ?, ?, ?)',
		[descripcion, fecha_creacion, categoria, fk_autores]
	)
}

module.exports = {
	getAll,
	create
}