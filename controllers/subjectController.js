const userModel = require('../models/userModel')
const subjectModel = require('../models/subjectModel')

module.exports = {
    createSubject: async (req, res) => {
        try {
            const userId = req.params.userId
            const subjectData = new subjectModel(req.body)
            const userData = await userModel.findById(userId)
            if (userData.userRole !== "Admin") {
                return res.status(403).send({
                    success: false,
                    message: 'Only admin users can create subjects',
                })
            }
            await subjectData.save()
            res.status(201).send({
                success: true,
                message: 'Subject created successfully',
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Internal server error',
                error: error.message,
            })
        }
    },

    updateSubject: async (req, res) => {
        try {
            const userId = req.params.userId
            const subjectId = req.params.subjectId
            const updatedSubjectData = req.body
            const userData = await userModel.findById(userId)
            if (userData.userRole !== "Admin") {
                return res.status(403).send({
                    success: false,
                    message: 'Only admin users can create subjects',
                })
            }
            const subjectData = await subjectModel.findByIdAndUpdate(subjectId, updatedSubjectData, { new: true })
            if (!subjectData) {
                return res.status(404).send({
                    success: false,
                    message: 'Subject not found',
                })
            }
            res.status(200).send({
                success: true,
                message: 'Subject updated successfully',
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Internal server error',
                error: error.message,
            })
        }
    },

    deleteSubject: async (req, res) => {
        try {
            const userId = req.params.userId
            const subjectId = req.params.subjectId
            const userData = await userModel.findById(userId)
            if (userData.userRole !== "Admin") {
                return res.status(403).send({
                    success: false,
                    message: 'Only admin users can delete subjects',
                })
            }
            const subjectData = await subjectModel.findByIdAndDelete(subjectId)
            if (!subjectData) {
                return res.status(404).send({
                    success: false,
                    message: 'Subject not found',
                })
            }
            res.status(200).send({
                success: true,
                message: 'Subject deleted successfully',
            })
        } catch (error) {
            res.status(500).send({
                success: false,
                message: 'Internal server error',
                error: error.message,
            })
        }
    },
}
