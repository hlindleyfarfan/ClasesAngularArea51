import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string
  contrasena: string
  mostrar: boolean = true

  constructor() { }

  ngOnInit() {
  }

  capturarUsuario(value: string) {
    this.usuario = value
  }

  capturarContrasena(value: string) {
    this.contrasena = value
  }

  ingresar() {
    alert(this.usuario + " " + this.contrasena)
  }

}
