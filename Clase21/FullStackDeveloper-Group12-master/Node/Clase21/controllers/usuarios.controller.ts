import fs = require("fs")
import { IError } from "../handlers/errors.handler";

import Usuario from "../models/usuario.model"

export class UsuariosController {

	async listar(req, res, next) {
		const data = await Usuario.find()
		res
			.status(200)
			.json(data)

		



	}

	async insertar(req, res) {
		const usuario:any = new Usuario()
		usuario.username = req.body.username
		await usuario.save()
		res.send("Usuario insertado")
	}

	async actualizar(req, res) {
		const _id = req.params._id
/*
		const usuario = Usuario.findOne({_id})   //  el campo _id se llama igual q el const _id -> se pone sólo {_id}
		usuario.username = req.body.username
		await usuario.save()
*/

		await Usuario.findOneAndUpdate({_id}, {username: req.body.username})   //esta línea resume las 3 anteriores

		res.send("Usuario actualizado")

	}

	async eliminar(req, res) {
		const _id = req.params._id
		
		await Usuario.findOneAndRemove({_id})
		
		res.send()

		res.send("Usuario eliminado")
	}
}