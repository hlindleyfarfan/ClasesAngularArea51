import { Injectable, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  onCambioData: EventEmitter<Array<{}>> = new EventEmitter<Array<{}>>()

  private data: Array<IReceta> = [
    { titulo: "Arroz con pato", descripcion: "plato tradicional norteño" },
    { titulo: "Picante de cuy", descripcion: "plato típico de la sierra" },
    { titulo: "Tacacho con cecina", descripcion: "plato típico de la selva" }
  ]

  constructor() { }

  listar(): Array<IReceta> {
    return this.data
  }

  eliminar(indice: number): void {
    if (confirm("¿Está seguro?")) {
      this.data.splice(indice, 1)
    }
    this.onCambioData.emit(this.data)
  }

  agregar(receta: IReceta) {
    this.data.push(receta)
    this.onCambioData.emit(this.data)
  }

  buscar(indice: number): IReceta {
    return this.data[indice]    
  }
  modificar(receta: IReceta, indice: number) {
    this.data.splice(indice, 1)
    this.data.push(receta)
    this.onCambioData.emit(this.data)
  }
}
