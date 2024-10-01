const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    notesContent: {
        type: String,
        required: true
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject',
        required: true,
    },
    chapterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'chapter',
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
})

noteSchema.set('timestamps', true)

module.exports = mongoose.model('notes', noteSchema)
