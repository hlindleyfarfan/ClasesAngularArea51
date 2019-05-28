import { DataService } from './data.service';
import { LogService } from './log.service';
import { Component } from '@angular/core';
import { ICurso } from './modelos/curso.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  nombreCurso: string

  //listaCursos: Array<string>//declaracion arreglo de cadenas

  //listaCursos: object[] = [] //arreglo de objetos declarado y definido: de esta forma el console.log sale {nombre...}
  //listaCursos: { nombre:string, cantidad:number, estado?:boolean }[] = [] //el ? para estado: campo opcional
  listaCursos: ICurso[] = [] //para usar la interface de curso.interface.ts


  constructor(private obj: DataService, private log: LogService) {
    this.leer()
    this.obj.onEnviarNuevoNombre.subscribe(
      data => {
        this.nombreCurso = data
      }
    )
    this.listaCursos.push({ nombre:"Angular", cantidad:12, estado:true })
    this.listaCursos.push({ nombre:"Node", cantidad:14, estado:false })
    this.listaCursos.push({ nombre:"Mongo", cantidad:15, estado:true })
    this.listaCursos.push({ nombre:"MongoOpcional", cantidad:15 })

    console.log("Lista de Cursos", this.listaCursos)
  }

  leer() {
    this.nombreCurso = this.obj.leerNombre()
  }
}
