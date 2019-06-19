import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "reducidor"
})
export class ReducidorPipe implements PipeTransform {
  transform(texto: string, limite: number = 40, adicional: string = "clic aqui") {

    let cantCaracteres: number = 1
    if (texto.length <= limite) return this.strTextoPalabras(texto,cantCaracteres)

    //return texto.substring(0, limite) + " " + adicional    
    return this.strTextoPalabras(texto.substring(0, limite),cantCaracteres) + " " + adicional
       
  }

  strTextoPalabras(textoCompleto:string, cantPalabras: number): string {

    let strTextoReturn: string = ""
    let i:number = 0
    let contPal: number = 0
    
    //console.log("textoCompleto: " + textoCompleto)
    for (i = 0; i <= textoCompleto.length; i++){
      if (textoCompleto.substr(i,1).includes(" "))
        {
          contPal ++          
          //console.log("Espacio en blanco: "+i)
        }
        
        
        strTextoReturn=strTextoReturn+textoCompleto.substr(i,1)
         /*       
        console.log("textoCompleto.substring(i,1): "+textoCompleto.substr(i,1))
        console.log("textoCompleto.substr(i,1): "+textoCompleto.substr(i,1))
        console.log(i)
        console.log("strTextoReturn concatenado: "+strTextoReturn)
        */
      if (contPal==cantPalabras)
      {
        /*console.log("return strTextoReturn")
        console.log("strTextoReturn 2: "+strTextoReturn)
        */
        return strTextoReturn
        
      }
      

    }
    //console.log("return textoCompleto")
    return textoCompleto
    //return strTextoReturn
  }
}
