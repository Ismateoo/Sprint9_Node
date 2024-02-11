const listaDeTareas = require("../tasks.js")
const knex = require('../config/database')

const verTareas = (req, res) => {
    try {
        res.json(listaDeTareas)
    }
    catch(error){
        res.json({mensaje: "No se pudo acceder a la lista de tareas"})
    }
}

const agregarTarea = (req, res) => {
    const tarea = req.body
    listaDeTareas.push(tarea)
    res.json(tarea)
}

const modificarTarea = (req, res) => {
    const titulo = req.params.titulo
    const nuevoTitulo = req.body
    let tarea = listaDeTareas.find(tarea => tarea.titulo === titulo);
    tarea.titulo = nuevoTitulo.titulo
    res.json(tarea)
}

const verTareasDB = async (req, res) => {
    const result = await knex('tareas').select('*')
    res.json(result)
}

const agregarTareaDB = async (req, res) => {
    const tarea = req.body
    const result = await knex('tareas').insert(tarea).returning('*')
    res.json(result)
}

const modificarTareaDB = async (req, res) => {
    const body = req.body
    const id = req.params.id
    const result = await knex('tareas').update(body).where({'id': id}).returning('*')
    res.json(result)
}


module.exports = {
    verTareas,
    agregarTarea,
    modificarTarea,
    verTareasDB,
    agregarTareaDB,
    modificarTareaDB
}