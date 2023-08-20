const postModel = require('../Models/postModel')

const uploadPost = async (req ,res )=>{
    console.log("This the is body of te reauest",req.body)
let newPost = new postModel({
    name:req.body.name,
    by:req.body.by,
    date:req.body.date,
    description:req.body.desc,
    likes:req.body.likes,
}) 
await newPost.save()
console.log(newPost)
   return res.status(200).json({message:"Uploaded Post Successfully"})
}

module.exports = uploadPost