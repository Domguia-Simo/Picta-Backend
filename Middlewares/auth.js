const jwt = require('jsonwebtoken')
const userModel = require('../Models/userModel')

function auth(req ,res ,next){
    userModel.findOne({email:req.body.email})
    .then(result => {
        console.log(result)
        if( result == null || !result.token ){
            console.log("Stopped for authentication")
            return res.status(401).json({message:"Please Authenticate"})
        }
        else{
            console.log("Passed authentication")
            next()
        }
    })
}

module.exports = auth