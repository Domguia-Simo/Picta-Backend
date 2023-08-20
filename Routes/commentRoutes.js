const express = require('express')
const router = express.Router()

//controller
let sendComment = require('../Controllers/sendCommentController')
let allComments = require('../Controllers/getAllCommentsController')

router.route('/sendComment').post(sendComment)

router.route('/getAllComments').get(allComments)

module.exports = router