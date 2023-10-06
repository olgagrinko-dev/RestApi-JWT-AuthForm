const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRouter = require('./controller/user.controller');
const app = express();

app.use(bodyParser.json());
app.use('/user', userRouter);


module.exports = app;