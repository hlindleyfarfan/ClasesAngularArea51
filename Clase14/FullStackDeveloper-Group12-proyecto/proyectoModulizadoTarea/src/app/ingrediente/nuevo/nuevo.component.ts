import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredienteService } from 'src/app/servicios/ingrediente.service';
import { Router } from '@angular/router';
import { canDeactivateFunction } from 'src/app/canDeactivateFuncion.interface';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit, canDeactivateFunction {
  grupo: FormGroup
  dataOriginal: any

  constructor(private ingredienteService: IngredienteService, private router: Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    })

    this.dataOriginal = this.grupo.getRawValue();

  }

  grabar() {
    this.ingredienteService.insertar(this.grupo.getRawValue())
      .subscribe(
        respuesta => this.router.navigate(["/ingrediente"])
      )
  }

  canDeactivateData(): boolean {
    const dataActual = this.grupo.getRawValue();

    let cambio = false;

    for(const prop in dataActual){
      if (this.dataOriginal[prop] !== dataActual[prop]){
        cambio = true;
      }
    }
    return cambio;
  }
}
