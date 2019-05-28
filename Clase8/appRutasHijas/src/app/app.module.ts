import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { EdicionClienteComponent } from './edicion-cliente/edicion-cliente.component';
import { HomeComponent } from './home/home.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';

import { RouterModule, Routes } from "@angular/router";
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { AutenticadoGuard } from './autenticado.guard';
import { AutorizationGuard } from './autorization.guard';

const rutas:Routes = [
  /*
  {path: "", component: HomeComponent},
  {path: "usuario", component: ListadoUsuariosComponent},
  {path: "usuario/nuevo", component: NuevoUsuarioComponent},
  {path: "usuario/edicion/:id", component: EdicionUsuarioComponent},
  {path: "cliente", component: ListadoClientesComponent},
  {path: "cliente/nuevo", component: NuevoClienteComponent},
  {path: "cliente/edicion/:id", component: EdicionClienteComponent},
  { path: "**", redirectTo: "" }
*/

{path: "", component: HomeComponent},

{path: "usuario", component:ListadoUsuariosComponent, canActivateChild: [AutorizationGuard], children: [
  //{path: "", component: ListadoUsuariosComponent},
  {path: "nuevo", component: NuevoUsuarioComponent},
  {path: "edicion/:id", component: EdicionUsuarioComponent}
]},


{path: "cliente", canActivateChild: [AutorizationGuard], children: [
  {path: "", component: ListadoClientesComponent},
  {path: "nuevo", component: NuevoClienteComponent},
  {path: "edicion/:id", component: EdicionClienteComponent}
]},

{ path: "**", redirectTo: "" }

]

@NgModule({
  declarations: [
    AppComponent,
    NuevoClienteComponent,
    EdicionClienteComponent,
    HomeComponent,
    NuevoUsuarioComponent,
    EdicionUsuarioComponent,
    ListadoUsuariosComponent,
    ListadoClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
