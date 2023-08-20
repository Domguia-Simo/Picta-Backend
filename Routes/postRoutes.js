const express = require('express')
const multer = require('multer')

var router = express.Router()

const storage = multer.diskStorage({
    destination:`./uploads`,
    // destination:`./testD`,

    filename:(req ,file,cb)=>{
        console.log(file)
        cb(null ,file.originalname)
    }

    // filename: (req, file, cb) => {
    //     const newFilename = file.originalname
    //     cb(null, newFilename);
    //   }

})

const upload = multer({storage})

//Controllers
var allPosts = require('../Controllers/getAllPostsController')
var createPost = require('../Controllers/createPostController')
var uploadFile = require('../Controllers/uploadFileController')
var uploadPost = require('../Controllers/uploadPostController')

//Post Routes
router.route('/getAllPosts').get(allPosts)
// upload.
router.route('/createPost').post(createPost)

// router.route('/uploadFile').post(upload.array('files') ,uploadFile)
router.route('/uploadFile').post(upload.single('file') ,uploadFile)

router.route('/uploadPost').post(uploadPost)

module.exports = router