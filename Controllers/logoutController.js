const userModel = require('../Models/userModel')

function logout(req ,res){

    userModel.updateOne({email:req.body.email},{$set:{token:''}})
    .then(result =>{
        console.log(result)
        return res.status(200).json({message:"Logout Successful"})
    })
    .catch(err => console.log(err))

}

module.exports = logout