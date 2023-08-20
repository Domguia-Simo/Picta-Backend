const express = require('express')
var router = express.Router()

//Controllers
const createUser = require('../Controllers/createUserController')
const login = require('../Controllers/loginController')
const allUsers = require('../Controllers/getAllUserController')
const getUser = require('../Controllers/getUserController')
const logout = require('../Controllers/logoutController')

//Middleware
const auth = require('../Middlewares/auth')

//User Routes

// router.route('/getAllUsers').get(auth ,allUsers)
router.route('/getAllUsers').get(allUsers)

router.route('/:id').get(getUser)

router.route('/createUser').post(createUser)

router.route('/login').post(login)

// router.route('/logout').post(auth ,logout)
router.route('/logout').post(logout)

module.exports = router