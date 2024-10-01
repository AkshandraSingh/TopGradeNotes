const express = require('express')

const userRouter = require('./routes/userRoute')

const commonRouter = express.Router()

commonRouter.use('/users', userRouter)

module.exports = commonRouter
