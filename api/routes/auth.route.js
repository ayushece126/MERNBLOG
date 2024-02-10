const express = require('express');
const authRouter = express.Router();
const {signup} = require('../controllers/auth.controller')

authRouter.post('/signup', signup)

module.exports = {
    authRouter,
}