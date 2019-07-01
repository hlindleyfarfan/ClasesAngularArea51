import fs = require("fs")

fs.readFile("./lectura.txt", "utf8",(err, contenido)=> {
        console.log(contenido)
    })

console.log("Archivo leido")
