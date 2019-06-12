import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  { path: "receta", component: ListadoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(rutas)]
})
export class RecetaRoutingModule { }
