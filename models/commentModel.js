const mongoose = require('mongoose')

const commentModel = new mongoose.Schema({
    commentContent: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    notesId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'notes',
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
})

commentModel.set('timestamps', true)

module.exports = mongoose.model('comments', commentModel)
