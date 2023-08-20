const commentModel = require('../Models/commentModel')

const sendComment = async (req ,res)=>{

    let newComment = new commentModel({
        comment:req.body.comment,
        commentor:req.body.commentor,
        time:req.body.time,
        publisher:req.body.publisher
    })
      await  newComment.save()

    .then(result => console.log(result))
    .catch(err => console.log(err))

    res.status(200).json({comment:req.body.comment})

}

module.exports = sendComment