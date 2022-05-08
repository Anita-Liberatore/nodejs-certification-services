const express = require('express')

const createError = require('http-errors')
const indexRoutes = require('./routes/index')
const indexRoutesTwo = require('./routes/indexTwo')
const app = express()
const PORT = 4000;

app.use('/', indexRoutes)
app.use('/one', indexRoutesTwo)

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        next(createError(405))
        return
    }
    next(createError(404))
})


app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT} `)
);
module.exports = app