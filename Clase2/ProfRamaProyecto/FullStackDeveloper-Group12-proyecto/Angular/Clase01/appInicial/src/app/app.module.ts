import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InicioComponent } from "./inicio.component";
import { HolaComponent } from './hola/hola.component'

@NgModule({
  declarations: [
    AppComponent, InicioComponent, HolaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HolaComponent]
})
export class AppModule { }
