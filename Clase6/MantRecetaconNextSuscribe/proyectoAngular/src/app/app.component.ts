import { Component } from '@angular/core';
import { EnviosService } from './envios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoAngular';

  mostrar: number = 1
  indiceReceta: number=0
/*
  constructor(private enviosService: EnviosService) {

      this.enviosService.subject.subscribe((mensaje) => {
      this.indiceReceta = mensaje
    })

  }
*/
}
