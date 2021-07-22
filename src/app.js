const express = require('express');
const compression = require('compression')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const login = require("./routers/LoginRouter");

const config = require('../src/configurations/server')

const app = express()


app.use(express.json());
app.use(cors());
app.use(compression());
app.use(cookieParser())

app.use('/api/v1/login', login);


module.exports = app

