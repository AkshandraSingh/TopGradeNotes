require('dotenv').config()
const express = require('express')

require('./config/modelConfig')
const commonRouter = require('./urls')

const app = express()

app.use(express.json())
app.use('/', commonRouter)


const PORT = process.env.PORT || 9001

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
