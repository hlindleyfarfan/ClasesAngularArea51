import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { IReceta } from '../modelos/receta.interface';



@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

@Output() onFinalizar:EventEmitter<number>=new EventEmitter<number>()

receta:IReceta={titulo:"",descripcion:""}


  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
agregar(){
this.dataService.agregar(this.receta)
this.onFinalizar.emit(2)
}
}
