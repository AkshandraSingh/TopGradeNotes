const express = require('express')

const userRouter = express.Router()

const userController = require('../controllers/userController')

userRouter.post('/registerUser', userController.registerUser)

module.exports = userRouter
