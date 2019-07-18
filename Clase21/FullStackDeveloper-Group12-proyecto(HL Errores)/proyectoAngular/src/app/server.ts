//import express = require("express")
import * as express from "express"
//import fs = require("fs")
import * as fs from "fs"

//import bodyParser = require("body-parser")
import * as bodyParser from "body-parser"


import { router as RouterRecetas } from "./controllers/receta.route"
import { rutaNoEncontrada, IError, general } from "./handlers/errors.handler";

//import mongoose = require("mongoose")
import * as mongoose from "mongoose"

//mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://hectorlindley:Schwarze6212$@cluster0-aficf.mongodb.net/midbprueba?retryWrites=true&w=majority",
{useNewUrlParser: true, useCreateIndex: true})
mongoose.connection.on("connected", ()=>console.log("Conectado a Mongo"))
mongoose.connection.on("error", error => console.log("Error", error))

require("./modelos/receta.model")


const app = express()

app.use(express.static("./assets"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", (req, res) => {
	res.type("text/html").status(200).send("<h1>Home</h1>")
})

app.use("/usuarios", RouterRecetas)

app.use(rutaNoEncontrada)

app.use(general)

app.listen(3000, () => console.log("Servidor ejecutándose"))