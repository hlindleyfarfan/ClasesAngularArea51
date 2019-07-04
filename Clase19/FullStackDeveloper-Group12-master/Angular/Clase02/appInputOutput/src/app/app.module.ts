import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EntradaSalidaComponent } from './entrada-salida/entrada-salida.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradaSalidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
