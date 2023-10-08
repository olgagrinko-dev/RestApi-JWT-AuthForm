const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const userRouter = require('./controller/user.controller');
const app = express();

app.use(cors({ origin: 'http://lockolhost:5173', credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser())
app.use('/user', userRouter);



module.exports = app;