// const users = require("../DB/users")
const userModel = require('../Models/userModel')

function getUser(req ,res ){

    userModel.findOne({_id:req.params.id})
    .then(result =>{
        console.log("This is the result : ")
        console.log(result)
        return res.status(200).json(result)
    })
    .catch(err => {
        
        console.log(err)
        return res.status(404).json({error:"Not Found"})
    })

    // users.forEach(row =>{
    //     if(req.params.id == row.id){
    //         res.json(row)
    //         return
    //     }
    // })

}

module.exports = getUser