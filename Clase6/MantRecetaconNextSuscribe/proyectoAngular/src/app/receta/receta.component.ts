import { DataService } from '../servicios/data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta';
import { EnviosService } from '../envios.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: IReceta
  @Input() indice: number

  @Output() onFinalizar: EventEmitter<number> = new EventEmitter<number>()
  private enviosService: EnviosService = new EnviosService()

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  eliminar() {
    this.dataService.eliminar(this.indice)
  }

  modificar() {
    //this.enviar()
    alert(this.indice)
    //this.enviosService.enviarIndice(this.indice)
    this.onFinalizar.emit(4)
  }

/*  enviar() {
    this.enviosService.enviarIndice(this.indice)
  }
  */
}
