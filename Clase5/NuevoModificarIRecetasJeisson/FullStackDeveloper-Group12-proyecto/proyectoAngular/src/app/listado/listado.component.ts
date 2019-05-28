import { DataService } from '../servicios/data.service';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  data: Array<{}>
 

@Output() onNuevo: EventEmitter<number>=new EventEmitter<number>()
@Output() onEditar: EventEmitter<{}>=new EventEmitter<{}>()

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.listar()

    this.dataService.onCambioData
      .subscribe(
        elementos => this.data = elementos
      )
  }

  nuevo(){
this.onNuevo.emit(3)
  }
  editar(valor){
    this.onEditar.emit([4,valor])
  }

}
