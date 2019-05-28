import { DataService } from '../servicios/data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: {}
  @Input() indice: number
  @Output() onModificar:EventEmitter<{}>=new EventEmitter<{}>()

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  eliminar() {
    this.dataService.eliminar(this.indice)
  }
  modificar(){
    this.onModificar.emit(this.receta)
  }

}
