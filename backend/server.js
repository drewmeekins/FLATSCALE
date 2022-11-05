// require dotenv
require('dotenv').config()

// require express
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./routes')

// mongoose connection
require('./config/db.connection')

app.get('/', (req, res) => {
    // console.log('testing')
    res.send('Welcome to FLATSCALE')
})

// port
app.listen(PORT, () => {
    console.log('Welcome to FLATSCALE on Port:', PORT)
})