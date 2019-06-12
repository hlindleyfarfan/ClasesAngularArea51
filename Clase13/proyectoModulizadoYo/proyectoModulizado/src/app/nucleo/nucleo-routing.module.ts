import { ListadoComponent } from './cabecera/cabecera.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  { path: "nucleo", component: ListadoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)]
})
export class NucleoRoutingModule { }
