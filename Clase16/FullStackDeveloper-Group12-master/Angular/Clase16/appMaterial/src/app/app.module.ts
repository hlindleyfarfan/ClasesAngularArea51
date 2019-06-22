import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatInputModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout"
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { TransportistasComponent } from './transportistas/transportistas.component'
import { Routes, RouterModule } from "@angular/router"

const rutas: Routes = [
  { path: "", component: HomeComponent },
  { path: "clientes", component: ClientesComponent },
  { path: "transportistas", component: TransportistasComponent },
  { path: "**", redirectTo: "" }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    TransportistasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas),
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
