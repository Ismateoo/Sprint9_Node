const listaDeTareas = require("../tasks.js")

const verTareas = (req, res) => {
    res.json(listaDeTareas)
}

module.exports = {
    verTareas
}