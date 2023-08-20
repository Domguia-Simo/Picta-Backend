// var users = require('../DB/users')
const mongoose = require('mongoose')
const userModel = require('../Models/userModel')

function createUser(req ,res  ,next){


    var regex = /[A-Z][a-z][0-9]/
    var test = false
    var test1 = 1
    var email = req.body.email
    var password = req.body.password
    var confirm = req.body.confirm

    userModel.findOne({email:email})
    .then(async (results) =>{
        if(results != null){

                console.log("Registration Stopped")
                return  res.status(400).json({message:"Email already in use"})

        }
        else{

            if(req.body.name == '' || req.body.surName == '' || req.body.email == '' ||
                req.body.password == '' || req.body.confirm == ''){
                console.log("Registration Stopped")
                return res.status(400).json({message:"Please Fill the entire form"})  
            }

            test1 = password.localeCompare(confirm)
            if(test1){
                console.log("Registration Stopped")
                return res.status(400).json({message:"Password are not identical"})
            }
        
            if(password.length < 8){
                console.log("Registration Stopped")
                return res.status(400).json({message:"Password must contain atleast 8 characters,a number and an alphanumerical character"})
            }


            let newUser = new userModel({
                name : req.body.name,
                surName : req.body.surName,
                email : req.body.email,
                password : req.body.password
            })
            await newUser.save()
            
        
            userModel.findOne({email : email})
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))

            console.log("Registration Okay")
            return res.status(200).json({message:"Registration successfull"})   

        }
    })
    .catch(err => console.log(err))
    
}

module.exports = createUser