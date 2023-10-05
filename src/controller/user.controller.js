const express = require('express');
const { getAllUsers, createUser, upDateUser,  deleteUserById } = require('../service/user.service');

const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const data = await getAllUsers();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.post('/', async (req, res) => {
    try {
        const { name, surname, email, password } = req.body;
        const data = await createUser(name, surname, email, password);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, password } = req.body;
        const data = await upDateUser(id, name, surname, email, password);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUserById(id);
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

route.post('/auth', async (req, res) => {
    try {
        // const { email, password } = req.body;
        // const data = await authorizationUse(email, password);
        // res.send(data);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = route;