import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetaRoutingModule } from './receta-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReducidorPipe } from './listado/reducidor.pipe';

@NgModule({
  declarations: [ListadoComponent, NuevoComponent, 
    ModificarComponent, ReducidorPipe],
  imports: [
    CommonModule,
    RecetaRoutingModule,
    ReactiveFormsModule
  ]
})
export class RecetaModule { }
