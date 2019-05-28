import { Component } from '@angular/core';
import { DataService } from './servicios/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appListadoServicios';

  data: Array<{}>

  constructor(private dataService: DataService){
    this.data=dataService.listar()
  }
}
