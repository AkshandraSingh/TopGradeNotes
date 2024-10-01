const bcrypt = require('bcrypt')

const userModel = require('../models/userModel')

module.exports = {
    registerUser: async (req, res) => {
        try {
            const userData = new userModel(req.body)
            const isUserNameExist = await userModel.findOne({
                userName: userData.userName
            })
            const isUserEmailExist = await userModel.findOne({
                userEmail: userData.userEmail
            })
            if (isUserNameExist || isUserEmailExist) {
                return res.status(400).json({
                    success: false,
                    message: 'User name or email already exists'
                })
            }
            const hashedPassword = await bcrypt.hash(userData.userPassword, 10)
            userData.userPassword = hashedPassword
            await userData.save()
            res.status(201).json({
                success: true,
                message: 'User registered successfully'
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: error.message,
            })
        }
    }
}
