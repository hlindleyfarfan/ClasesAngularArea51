//import fs = require("fs")
import * as fs from "fs"
//import { IError } from "../handlers/errors.handler";

import Receta from "../modelos/receta.model"

export class RecetasController {

	async listar(req, res, next) {

		//console.debug("Consultando Mongo!")

		const data = await Receta.find()
		res
			.status(200)
			.json(data)

		//console.debug("Consultando Mongo!")



	}

	async insertar(req, res) {
		const receta:any = new Receta()
		receta.titulo = req.body.titulo
		await receta.save()
		res.send("Receta insertado")
	}

	async actualizar(req, res) {
		const _id = req.params._id
/*
		const usuario = Usuario.findOne({_id})   //  el campo _id se llama igual q el const _id -> se pone sólo {_id}
		usuario.username = req.body.username
		await usuario.save()
*/

		await Receta.findOneAndUpdate({_id}, {username: req.body.username})   //esta línea resume las 3 anteriores

		res.send("Receta actualizado")

	}

	async eliminar(req, res) {
		const _id = req.params._id
		
		await Receta.findOneAndRemove({_id})
		
		res.send()

		res.send("Receta eliminado")
	}
}