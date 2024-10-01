const mongoose = require('mongoose')

const chapterSchema = new mongoose.Schema({
    chapterName: {
        type: String,
        required: true
    },
    chapterSummary: {
        type: String,
        required: true,
    },
    subjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'subject',
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
})

chapterSchema.set('timestamps', true)

module.exports = mongoose.model('chapter', chapterSchema)
