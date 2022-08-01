const express = require('express');
const app = express();

const userRouter = require('./controllers/user');

app.use('/api/users', userRouter);

module.exports = app;
