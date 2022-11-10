// require dotenv
require('dotenv').config()

// require express
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const bcrypt = require('bcrypt')
const session = require('express-session')

const routes = require('./routes')

// mongoose connection
require('./config/db.connection')

// app.get('/', (req, res) => {
//     // console.log('testing')
//     res.send('Welcome to FLATSCALE')
// })

// cors setup
const cors = require('cors')
const whitelist = ["http://localhost:3000", "http://localhost:3001", `${process.env.FRONTEND_URL}`]

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            // bypasses postman request with no origin
            return callback(null, true)
        }
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS!'))
        }
    }
}

app.use(cors(corsOptions))

// a local variable on all routes
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
)

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/profile/', routes)

// port
app.listen(PORT, () => {
    console.log('Welcome to FLATSCALE on Port:', PORT)
})