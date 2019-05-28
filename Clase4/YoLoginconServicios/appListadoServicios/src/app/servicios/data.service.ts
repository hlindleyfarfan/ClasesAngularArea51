import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Array<{}>=[
    { titulo:"Arroz con pato", descripcion:"plato tradicional norteño" },
    { titulo: "Picante de cuy", descripcion: "plato típico de la sierra" },
    { titulo: "Tacacho con cecina", descripcion: "plato típico de la selva" }
  ]
  constructor() { }

  listar(): Array<{}>{
    return this.data
  }

  eliminar(indice:number){
    if (confirm("¿Está seguro?")) 
      this.data.splice(indice, 1)
    
  }
}
