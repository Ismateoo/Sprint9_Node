const express = require('express');
const route = express.Router()

const routesSaludo = require("./routesSaludo")
route.use(routesSaludo)

const routesTareas = require("./routesTareas")
route.use(routesTareas)

module.exports = route;