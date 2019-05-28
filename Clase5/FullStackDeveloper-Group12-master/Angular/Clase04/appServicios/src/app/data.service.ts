import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root' //para no ponerlo en el app.module
})
export class DataService {
  private nombre: string = "FullStack"

  onEnviarNuevoNombre: EventEmitter<string> = new EventEmitter<string>()

  cambiarNombre(nuevoNombre) {
    this.nombre = nuevoNombre
    this.onEnviarNuevoNombre.emit(this.nombre);
    this.log.escribir("Se cambió nombre")

  }

  constructor(private log: LogService){

  }

  leerNombre() {
    this.log.escribir("Se leyó nombre");
    return this.nombre
  }
}
