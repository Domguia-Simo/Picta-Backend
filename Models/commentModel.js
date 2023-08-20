const mongoose = require('mongoose')
const Schema = mongoose.Schema

const comment = new Schema({
    comment:{type:"string"},
    commentor:{type:"string"},
    time:{type:"string"},
    publisher:{type:"string"}
})

let commentModel = mongoose.model('comment' ,comment)

module.exports = commentModel