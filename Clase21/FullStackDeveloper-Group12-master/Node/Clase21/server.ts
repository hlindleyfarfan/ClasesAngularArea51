import express = require("express")
import fs = require("fs")
import bodyParser = require("body-parser")
import { router as RouterUsuarios } from "./routes/usuarios.route"
import { rutaNoEncontrada, IError, general } from "./handlers/errors.handler";

import mongoose = require("mongoose")
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://hectorlindley:Schwarze6212$@cluster0-aficf.mongodb.net/midbprueba?retryWrites=true&w=majority",
{useNewUrlParser: true, useCreateIndex: true})
mongoose.connection.on("connected", ()=>console.log("Conectado a Mongo"))
mongoose.connection.on("error", error => console.log("Error", error))

require("./models/usuario.model")

const app = express()

app.use(express.static("./assets"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
	res.type("text/html").status(200).send("<h1>Home</h1>")
})

app.use("/usuarios", RouterUsuarios)

app.use(rutaNoEncontrada)

app.use(general)

app.listen(3000, () => console.log("Servidor ejecutándose"))