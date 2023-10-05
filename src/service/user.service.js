const bcrypt = require('bcrypt');
const { getAllUsersDb, getUsersByIdDb, createUserDb, upDateUserDb,  deleteUserByIdDb, getUserByEmailDb } = require('../repository/user.repository');

async function getAllUsers() {
    const data = await getAllUsersDb();
    return data;
}

async function getUsersById(id) {
    const data = await getUsersByIdDb(id);
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

async function authorizationUser(email, pwd) {
    const user = await getUserByEmailDb(email);
    if (!user.length) throw new Error("email not found");
    const bool = await bcrypt.compare(pwd, user[0].pwd);
    if (!bool) throw new Error("пароли не совпадают");
    return user;
}

module.exports = { getAllUsers, getUsersById, createUser, upDateUser,  deleteUserById, authorizationUser };