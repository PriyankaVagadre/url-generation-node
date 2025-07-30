const express = require('express');

const userRoute = express.Router();

const {handelUserRequest} = require('../controllers/user')

userRoute.get('/',handelUserRequest)

module.exports = userRoute;