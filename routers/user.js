const express = require('express');

const userRoute = express.Router();

const {handelUserRequest, handelUserLoginRequest} = require('../controllers/user')

userRoute.post('/',handelUserRequest)

userRoute.post('/login',handelUserLoginRequest)

module.exports = userRoute;