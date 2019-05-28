import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio.component';
import { HOLAComponent } from './hola/hola.component';

@NgModule({
  declarations: [
    AppComponent, InicioComponent, HOLAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HOLAComponent]
})
export class AppModule { }
