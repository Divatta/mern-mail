const express = require('express')
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use(`/api/v1`, require('./route/mailRoute'))

app.listen(PORT, () => {
    console.log(`Server is running @ http://localhost${PORT}`)
})