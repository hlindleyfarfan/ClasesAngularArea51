import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';

@NgModule({
  declarations: [ListadoComponent, NuevoComponent, ModificarComponent],
  imports: [
    CommonModule
  ]
})
export class RecetaModule { }
