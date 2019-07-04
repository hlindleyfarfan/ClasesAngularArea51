import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  /*   @Input() nombre: string
    @Input() area: string */
  @Input("user") usuario: {}
  @Output() onSalida: EventEmitter<number> = new EventEmitter<number>()
  @Input() indice: number

  constructor() { }

  ngOnInit() {
    /* console.log(this.nombre) */
  }

  eliminar() {
    this.onSalida.emit(this.indice)
  }

}
