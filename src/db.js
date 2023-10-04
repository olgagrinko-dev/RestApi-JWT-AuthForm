const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: '5432',
    password: 'pozdeeva1709)',
    database: 'authForm',
    user: 'postgres'
})

module.exports = { pool };