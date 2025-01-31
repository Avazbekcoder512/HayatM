const express = require('express')
const { connectDB } = require('./src/database/connect')
const router = require('./router')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()
connectDB()
app.use(cors())
app.use(express.static(path.dirname('public')))

app.use('/', router)
app.use((req, res) => {
    return res.status(404).send({
        error: "Page not found"
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}...`);
})