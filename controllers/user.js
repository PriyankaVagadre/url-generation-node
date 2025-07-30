const express = require('express');
const User = require('../models/user');

async function handelUserRequest(req,res) {
    const {name, email, password} = req.body

    if(!req.body) return;

    await User.create({
        name,
        email,
        password
    });

    return res.json({status: 'ok'})
}

module.exports = {handelUserRequest}