const { pool } = require('../db');

async function getAllUsersDb() {
    const client = await pool.connect();
    const sql = 'select * from users';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getUsersByIdDb(id) {
    const client = await pool.connect();
    const sql = 'select * from users where id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}


async function createUserDb(name, surname, email, password) {
    const client = await pool.connect();
    const sql = 'insert into users(name, surname, email, password) values($1, $2, $3, $4) returning *';
    const result = (await client.query(sql, [name, surname, email, password])).rows;
    return result;
}

async function upDateUserDb(id, name, surname, email, password) {
    const client = await pool.connect();
    const sql = 'update users set name = $1, surname = $2, email = $3, password = $4  where id = $5 returning *';
    const result = (await client.query(sql, [name, surname, email, password, id])).rows;
    return result;
}

async function deleteUserByIdDb(id){
    const client = await pool.connect();
    const sql = 'delete from users where id = $1 returning *';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

async function getUserByEmailDb(email) {
    const client = await pool.connect();
    const sql = 'select * from users where email = $1';
    const result = (await client.query(sql, [email])).rows; 
    return result;
}

module.exports = { getAllUsersDb, getUsersByIdDb, createUserDb, upDateUserDb,  deleteUserByIdDb, getUserByEmailDb };