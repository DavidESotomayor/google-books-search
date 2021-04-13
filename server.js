const express = require('express')
const mongoose = require('mongoose')
const apiRoutes = require('./routes')
const PORT = process.env.PORT || 3001
const app = express()

// middleware
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

// serving up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

// API Routes
app.use(apiRoutes)

// Connecting to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googlebooks"

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`);
})