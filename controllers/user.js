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

async function handelUserLoginRequest(req,res) {
    const {email, password} = req.body

    if(!req.body) return;

    const user = await User.findOne({email,password})

    if(user) return res.redirect('/url/server')

    else 
        return res.json({status:'login failed'})
}

module.exports = {handelUserRequest, handelUserLoginRequest}