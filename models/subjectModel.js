const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
    subjectName: {
        type: String,
        required: true
    },
    subjectDescription: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
})

subjectSchema.set('timestamps', true)

module.exports = mongoose.model('subject', subjectSchema)
