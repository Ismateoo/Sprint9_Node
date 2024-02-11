const express = require('express');
const controllersTareas  = require('../controllers/controllersTareas');
const route = express.Router()



route.get('/verTareas', controllersTareas.verTareas)

route.post('/agregarTarea', controllersTareas.agregarTarea)

route.put('/modificarTarea/:titulo', controllersTareas.modificarTarea)


route.get('/verTareasDB', controllersTareas.verTareasDB)

route.post('/agregarTareaDB', controllersTareas.agregarTareaDB)

route.put('/modificarTareaDB/:id', controllersTareas.modificarTareaDB)
module.exports = route;