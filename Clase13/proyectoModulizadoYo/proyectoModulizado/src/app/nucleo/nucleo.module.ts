import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  declarations: [LoginComponent, CabeceraComponent],
  imports: [
    CommonModule
  ]
})
export class NucleoModule { }
