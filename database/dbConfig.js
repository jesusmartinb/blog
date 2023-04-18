const mysql = require('mysql2');
const { database } = require('../config/index.config');

const pool = mysql.createPool(database);

global.db = pool.promise();