const bcrypt = require('bcrypt');
const { getAllUsersDb, createUserDb, upDateUserDb,  deleteUserByIdDb, getUserByEmailDb } = require('../repository/user.repository');

async function getAllUsers() {
    const data = await getAllUsersDb();
    return data;
}

async function createUser(name, surname, email, password) {
    const user = await getUserByEmailDb(email);
    if(user.length) throw new Error ('такой пользователь уже существует');
    const saltroud = 2;
    const hashedPassword = await bcrypt.hash(password, saltroud);
    const data = await createUserDb(name, surname, email, hashedPassword);
    return data;
}

async function upDateUser(id, name, surname, email, password) {
    const data = await upDateUserDb(id, name, surname, email, password);
    return data;
}

async function deleteUserById(id) {
    const data = await deleteUserByIdDb(id);
    return data;
}

module.exports = { getAllUsers, createUser, upDateUser,  deleteUserById };