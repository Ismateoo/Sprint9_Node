const express = require("express");
const app = express();
app.use(express.json());

require('dotenv').config()
const port = process.env.EXPRESS_PORT;

const routes = require("./routes/routesIndex.js")
app.use(routes)

app.listen(port, () => {
    console.log(`Estoy en el puerto ${port}`);
})