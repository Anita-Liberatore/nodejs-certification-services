const express = require('express')
const createError = require('http-errors')
const app = express()
const PORT = 3000;

console.log("Server listen - exercise")

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT} `)
);
module.exports = app