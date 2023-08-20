const { ObjectId } = require('mongodb')
const postModel = require('../Models/postModel')

function like(req ,res){
    // let id = req.body.postID
    let id = new ObjectId(req.body.postID)
    let newLikes = parseInt(req.body.like) + 1 
    console.log(id ,req.body.like)
    postModel.updateOne({_id: id},{$set:{likes:newLikes}})
    .then(result => {
        console.log(result)
        return res.status(200).json({message:"Like Successfull"})
    })
    .catch(err => console.log("Error" ,err))
}

module.exports = like