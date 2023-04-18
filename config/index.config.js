require('dotenv').config('')

const config = {
	server: {
		port: process.env.SERVER_PORT
	},
	database: {
		host: process.env.DATABASE_HOST,
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASSWORD,
		port: process.env.DATABASE_PORT,
		database: process.env.DATABASE_NAME
	}
}

module.exports = config