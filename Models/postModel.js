const mongoose = require('mongoose')
const commentModel = require('./commentModel')
const Schema = mongoose.Schema

const post = new Schema({
    
    name:{type:"string"},
    by:{type:"string"},
    date:{type:"string"},
    description:{type:"string"},
    likes:{type:"number"},
    // comments:[{type:[commentModel]}]

})

let postModel = mongoose.model('post' , post)

module.exports = postModel