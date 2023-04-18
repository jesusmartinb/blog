// Obtención de los posts
// SELECT * FROM posts
// Cada post recuperado va acompañado de todos los datos del autor de este y no solo del identificador que lo define
// select p.titulo, p.descripcion, p.fecha_creacion as 'fecha creación', p.categoria, a.nombre as 'autor', a.email, a.imagen from blog_unir.posts as p, blog_unir.autores as a where p.fk_autores = a.id;
const getAll = () => {
	// return db.query('select * from posts');
	return db.query("select p.titulo, p.descripcion, p.fecha_creacion as 'fecha creación', p.categoria, a.nombre as 'autor', a.email, a.imagen from blog_unir.posts as p, blog_unir.autores as a where p.fk_autores = a.id");
}

// Recuperar un autor
const getOneAuthor = (autorId) => {
	return db.query(`select a.nombre, a.email, a.imagen from blog_unir.autores as a where a.id = ${autorId}`)
}

// Recuperación de los posts escritos por un mismo autor
const getAllPostsByAuthor = (autorId) => {
	return db.query(`SELECT p.titulo, p.descripcion, p.fecha_creacion as 'fecha creación', p.categoria FROM blog_unir.posts as p WHERE p.fk_autores = (SELECT a.id FROM blog_unir.autores as a WHERE a.id = ${autorId})`)
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

module.exports = {
	getAll,
	getOneAuthor,
	getAllPostsByAuthor,
	create
}