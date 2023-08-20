const commentModel = require('../Models/commentModel')

function allComments(req ,res){
    commentModel.find({})
    .then(result => {
        console.log("Comments fetched successfully")
        res.status(200).json(result)
    })
    .catch(err => console.log(err))
}

module.exports = allComments