import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioModule } from '../usuario/usuario.module';
import { ClienteModule } from '../cliente/cliente.module';
import { TransportistaModule } from '../transportista/transportista.module';


const rutas: Routes = [
  {path: "", component: LoginComponent},
  {path: "usuario", loadChildren: "../usuario/
  UsuarioModule.module#"},
  {path: "**", redirectTo: ""}
]

@NgModule({
  imports:[RouterModule.forChild(rutas),
    UsuarioModule, ClienteModule, TransportistaModule],
  exports:[RouterModule]
})

export class NucleoRoutingModule{

}
