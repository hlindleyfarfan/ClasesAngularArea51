import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  recetas: Array<object> = [
    { titulo: "Receta 1", descripcion: "Desc. Receta 1" },
    { titulo: "Receta 2", descripcion: "Desc. Receta 2" },
    { titulo: "Receta 3", descripcion: "Desc. Receta 3" }
  ]

  constructor() { }

  ngOnInit() {
  }

  eliminarReceta(indice: number){
    this.recetas.splice(indice,1);
    console.log(indice)
  }
}
