// Obtención de los posts
// SELECT * FROM posts
// Cada post recuperado va acompañado de todos los datos del autor de este y no solo del identificador que lo define
// select p.titulo, p.descripcion, p.fecha_creacion as 'fecha creación', p.categoria, a.nombre as 'autor', a.email, a.imagen from blog_unir.posts as p, blog_unir.autores as a where p.fk_autores = a.id;
const getAll = () => {
	// return db.query('select * from posts');
	return db.query("select p.titulo, p.descripcion, p.fecha_creacion as 'fecha creación', p.categoria, a.nombre as 'autor', a.email, a.imagen from blog_unir.posts as p, blog_unir.autores as a where p.fk_autores = a.id");
}

const getById = (postId) => {
	return db.query('select * from posts where id = ?', [postId]);
}

// Creación de un nuevo registro de post
// insert into posts (titulo, descripcion, fecha_creacion, categoria, fk_autores) values (?, ?, ?, ?, ?)
const create = ({ titulo, descripcion, fecha_creacion = new Date(), categoria, fk_autores }) => {
	fecha_creacion = fecha_creacion.getFullYear() + "-" + (fecha_creacion.getMonth() + 1) + "-" + fecha_creacion.getDate();

	return db.query(
		'insert into posts (titulo, descripcion, fecha_creacion, categoria, fk_autores) values (?, ?, ?, ?, ?)',
		[titulo, descripcion, fecha_creacion, categoria, fk_autores]
	)
}

// Actualización completa de un registro de posts
const updateById = (id, { titulo, descripcion, fecha_creacion, categoria, fk_autores }) => {
	return db.query(
		'update posts set titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, fk_autores = ? where id = ?',
		[titulo, descripcion, fecha_creacion, categoria, fk_autores, id]
	)
}

// Borrado de un post
const deleteById = (id) => {
	return db.query('delete from posts where id = ?', [id])
}

module.exports = {
	getAll,
	getById,
	create,
	updateById,
	deleteById
}