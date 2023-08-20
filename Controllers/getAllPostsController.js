// var posts = require('../DB/posts')
const commentModel = require('../Models/commentModel')
const postModel = require('../Models/postModel')

const allPosts = (req ,res )=>{

     postModel.find({})
    .then(  (posts) => {
     console.log("All Posts sent correctly")
        return res.status(200).json(posts)

    })
    .catch(err => console.log(err))


}

module.exports = allPosts