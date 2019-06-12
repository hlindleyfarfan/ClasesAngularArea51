import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingrediente } from '../modelos/ingrediente';

@Injectable({
  providedIn: 'root'
})
export class IngredienteService {

  onListar = new EventEmitter<string>()

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(environment.rutaApiRest + "ingrediente")
  }

  getOne(_id: string): Observable<any> {
    return this.http.get<any>(environment.rutaApiRest + "ingrediente/" + _id)
  }

  insert(ingrediente: Ingrediente) {
    this.http.post(environment.rutaApiRest + "ingrediente", ingrediente)
      .subscribe(
        data => { this.onListar.emit("Registro insertado") },
        error => console.log(error)
      )
  }

  update(_id: string, ingrediente: Ingrediente): Observable<any> {
    return this.http.put(environment.rutaApiRest + "ingrediente" + _id, ingrediente)
  }

  delete(_id: string): Observable<any> {
    return this.http.delete(environment.rutaApiRest + "ingrediente" + _id)
  }
}
