import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IReceta } from '../modelos/receta.interface';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  @Output() onModificar:EventEmitter<number>=new EventEmitter<number>()
  @Input() receta:IReceta

  constructor() { }

  ngOnInit() {
  }

  modificar(){

this.onModificar.emit(2)
  }
}
