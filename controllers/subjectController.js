const userModel = require('../models/userModel')
const subjectModel = require('../models/subjectModel')

module.exports = {
    createSubject: async (req, res) => {
        try {
            const userId = req.params.userId
            const subjectData = new subjectModel(req.body)
            const userData = await userModel.findById(userId)
            if (userData.userRole !== "Admin") {
                return res.status(403).json({
                    success: false,
                    message: 'Only admin users can create subjects',
                })
            }
            await subjectData.save()
            res.status(201).json({
                success: true,
                message: 'Subject created successfully',
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error.message,
            })
        }
    },
}
