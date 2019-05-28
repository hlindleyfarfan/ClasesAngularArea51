import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {
  
  @Input() receta: {}
  @Input() indice: number

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  eliminar(){
    this.dataService.eliminar(this.indice)
  }
}
