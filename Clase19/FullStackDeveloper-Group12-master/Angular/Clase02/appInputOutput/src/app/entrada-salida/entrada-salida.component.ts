import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrada-salida',
  templateUrl: './entrada-salida.component.html',
  styleUrls: ['./entrada-salida.component.css']
})
export class EntradaSalidaComponent implements OnInit {

  ocultar: boolean = true

  textoCapturado: string

  constructor() { }

  ngOnInit() {
  }

  capturar(valor: string) {
    this.textoCapturado = valor
    console.log("Texto", valor)
  }

  mostrar() {
    alert(this.textoCapturado)
  }

}
