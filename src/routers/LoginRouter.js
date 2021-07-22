const express = require('express');
const loginController = require('../controllers/LoginController');

const Router = express.Router(); 

Router
    .post('/sign-up',loginController.signUp)

module.exports = Router;