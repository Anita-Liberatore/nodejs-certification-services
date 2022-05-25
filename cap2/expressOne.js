const express = require('express')

const createError = require('http-errors')
const indexRoutes = require('./routes/index')
const indexRoutesTwo = require('./routes/indexTwo')
const data = require('./routes/data')
const app = express()
const PORT = 4000;

app.use('/', indexRoutes)
app.use('/one', indexRoutesTwo)
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