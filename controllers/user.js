const express = require('express');
const User = require('../models/user');
const { v4 : uuidv4} = require('uuid')
const { setUser} = require('../service/auth')

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

    if(user) {
        const sessionID = uuidv4();

        setUser(sessionID, user)

        res.cookie('uid', sessionID)
        return res.redirect('/url/server')

    }

    else 
        return res.json({status:'login failed'})
}

module.exports = {handelUserRequest, handelUserLoginRequest}