console.log("Implementing a RESTful JSON GET with Express")

const express = require('express')
const createError = require('http-errors')

var bicycleRouter = require('./routes/bicycle');
const app = express()
const PORT = 3000;

app.use('/bicycle', bicycleRouter);

app.use((req, res, next) => {
    if (req.method !== 'GET') {
        console.log("Method 405")
        next(createError(405))
        return
    }
    console.log("not found")
    next(createError(404))
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.status || 500)
    res.send({
        type: 'error',
        status:
            err.status || 500,
        message:
            err.message,
       // stack: req.app.get('env') === 'development' ? err.stack : undefined
    });
});

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT} `)
);
module.exports = app