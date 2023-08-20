// const users = require("../DB/users")
const userModel = require('../Models/userModel')

function allUsers(req ,res){

    userModel.find({})
    .then(result => {

        console.log(result)
        return res.status(200).json(result)

    })
    .catch(err => console.log(err))
    
}

module.exports = allUsers