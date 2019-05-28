import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Route, Routes } from "@angular/router";
import { UsuarioComponent } from './usuario/usuario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { EdicionComponent } from './edicion/edicion.component'

//const rutas: Route[] = []   // es igual a const rutas: Routes = []
const rutas: Routes = [
  { path: "", component: UsuarioComponent },
  { path: "clientes", component: ClienteComponent },
  //{ path: "edicion", component: EdicionComponent },
  { path: "edicion/:id", component: EdicionComponent },


  //{ path: "**", component: NoEncontradoComponent }
  { path: "**", redirectTo: "" }
]


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ClienteComponent,
    NoEncontradoComponent,
    EdicionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
