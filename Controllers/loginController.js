// var users = require('../DB/users')
const userModel = require('../Models/userModel')
const jwt = require('jsonwebtoken')

function login(req ,res){
    var email = req.body.email
    var password = req.body.password

    userModel.findOne({email:email,password:password})
    .then(result => {
        console.log(result)

        if(result != null){
            const token = jwt.sign({id:result._id ,email:result.email} ,'myjwttoken' ,{expiresIn:'1 hour'})

                userModel.updateOne({email:email},{$set:{token:token}})
                .then(res => console.log(res))
                .catch(err => console.log(err))


                let decodedToken = jwt.decode(token ,'myjwttoken')
                console.log(decodedToken)
            return res.json({message:"Connected",token:token,name:(result.name+' '+result.surName)})
        }
        else{
            console.log("Login Failed")
            return res.json({message:"Wrong Email or Password"})
        }
    })
    .catch(err => console.log(err))       
}

module.exports = login