console.log("Cap 3 - Web server with express")
const express = require('express')

const createError = require('http-errors')
const data = require('../cap3/data')
const app = express()
const PORT = 4000;

app.use('/data', data)

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        console.log("Method 405")
        next(createError(405))
        return
    }
    console.log("not found")
    next(createError(404))
})


app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT} `)
);
module.exports = app