const express = require('express')

const subjectController = require('../controllers/subjectController')

const subjectRouter = express.Router()

subjectRouter.post('/createSubject/:userId', subjectController.createSubject)
subjectRouter.patch('/updateSubject/:userId/:subjectId', subjectController.updateSubject)
subjectRouter.delete('/deleteSubject/:userId/:subjectId', subjectController.deleteSubject)

module.exports = subjectRouter
