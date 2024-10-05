const express = require('express')

const userRouter = require('./routes/userRoute')
const subjectRouter = require('./routes/subjectRoute')

const commonRouter = express.Router()

commonRouter.use('/users', userRouter)
commonRouter.use('/subjects', subjectRouter)

module.exports = commonRouter
