const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
    },

    loginUser: async (req, res) => {
        try {
            const { userAccount, userPassword } = req.body
            const userData = await userModel.findOne({
                $or: [{ userName: userAccount }, { userEmail: userAccount }]
            })
            if (!userData) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found'
                })
            }
            const isPasswordMatch = await bcrypt.compare(userPassword, userData.userPassword)
            if (!isPasswordMatch) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid password'
                })
            }
            const token = jwt.sign({ userData }, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.json({
                success: true,
                message: 'User logged in successfully',
                token: token
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
