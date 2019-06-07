import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ListadoUsuarioComponent } from './listado-usuario/listado-usuario.component';

const rutas: Routes = [
  {path: "usuario", component: ListadoUsuarioComponent}
]
  @NgModule({
    imports:[RouterModule.forRoot(rutas)],
    exports: [RouterModule]
  })

  export class UsuarioRoutingModule{}
