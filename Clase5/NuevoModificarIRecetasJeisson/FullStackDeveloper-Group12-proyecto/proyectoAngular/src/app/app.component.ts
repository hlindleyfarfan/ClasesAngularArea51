import { Component, Input } from '@angular/core';
import { IReceta } from './modelos/receta.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'proyectoAngular';

  mostrar: number = 1
  receta:IReceta
  capturar(valor){
    this.mostrar=valor[0]
    this.receta=valor[1]
  }

}
