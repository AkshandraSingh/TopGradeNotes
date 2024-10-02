const express = require('express')

const userRouter = express.Router()

const userController = require('../controllers/userController')

userRouter.post('/registerUser', userController.registerUser)
userRouter.post('/loinUser', userController.loginUser)

module.exports = userRouter
