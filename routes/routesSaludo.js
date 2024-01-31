const express = require('express');
const route = express.Router()

route.get('/saludo', (req, res) => {
    res.send("Hola Mundo!")
})

module.exports = route;