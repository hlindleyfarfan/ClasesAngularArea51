//import express = require("express")
import * as express from "express"

//import fs = require("fs")
import { RecetasController } from "../controllers/receta.controller"
import { cacheo } from "../handlers/errors.handler";

const controller = new RecetasController()

const router = express.Router()

router.get("/", cacheo(controller.listar))
router.post("/", cacheo(controller.insertar))
router.delete("/:_id", controller.eliminar)
router.put("/:_id", controller.actualizar)

export { router }