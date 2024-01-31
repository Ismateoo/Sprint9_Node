const express = require('express');
const route = express.Router()

const routesSaludo = require("./routesSaludo")
route.use(routesSaludo)

module.exports = route;