const express = require('express')

const subjectController = require('../controllers/subjectController')

const subjectRouter = express.Router()

subjectRouter.post('/createSubject/:userId', subjectController.createSubject)
subjectRouter.patch('/updateSubject/:userId/:subjectId', subjectController.updateSubject)

module.exports = subjectRouter
