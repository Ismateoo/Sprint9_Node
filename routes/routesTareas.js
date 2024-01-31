const express = require('express');
const controllersTareas  = require('../controllers/controllersTareas');
const route = express.Router()



route.get('/verTareas', controllersTareas.verTareas)

module.exports = route;