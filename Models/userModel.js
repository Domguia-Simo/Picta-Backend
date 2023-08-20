const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema

const user = new Schema({
    name:{type:"string"},
    surName:{type:"string"},
    email:{type:"string"},
    password:{type:"string"},
    confirm:{type:"string"},
    token:{type:"string"},
})

const userModel = mongoose.model('user' ,user)

module.exports = userModel