const express = require('express');

const userRoute = express.Router();

const {handelUserRequest} = require('../controllers/user')

userRoute.post('/',handelUserRequest)

module.exports = userRoute;