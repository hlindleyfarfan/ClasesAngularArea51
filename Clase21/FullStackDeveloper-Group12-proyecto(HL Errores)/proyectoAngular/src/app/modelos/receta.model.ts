//import mongoose = require("mongoose")
import * as mongoose from "mongoose"

const esquema = new mongoose.Schema({
    titulo: {
        type: String, 
        required: true,
        size: 100,
        unique: true,
        email: true,
        lowercase: true
    },
    descripcion: {
        type: String, 
        required: true,
        size: 300,
        unique: true,
        email: true,
        lowercase: true
    }
})

const Receta = mongoose.model("Receta", esquema)

export default Receta

export interface IReceta {
    titulo: string
    descripcion: string
  }

