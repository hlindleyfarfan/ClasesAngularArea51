import { Component, OnInit, Input } from '@angular/core';
import { IReceta } from '../modelos/receta';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  receta: IReceta = { titulo: "", descripcion: "" }
  @Input() indice: number = 0

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.receta = this.dataService.buscar(this.indice)
  }

}
