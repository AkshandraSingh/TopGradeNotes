const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/TopGradeNotes')

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection successful')
})

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:', err)
})
