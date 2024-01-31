const express = require('express');
const route = express.Router()

const listaDeTareas = require("../tasks.js")

route.get('/verTareas', (req, res) => {
    res.json(listaDeTareas)
})

module.exports = route;