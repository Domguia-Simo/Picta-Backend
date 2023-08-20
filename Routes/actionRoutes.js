const express = require('express')
const router = express.Router()

//controller
var like = require('../Controllers/likeController')

router.route('/like').post(like)

module.exports = router