import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Receta } from '../modelos/receta';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  onListar = new EventEmitter<string>()

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(environment.rutaApiRest + "receta")
  }

  getOne(_id: string): Observable<any> {
    return this.http.get<any>(environment.rutaApiRest + "receta/" + _id)
  }

  insert(receta: Receta) {
    this.http.post(environment.rutaApiRest + "receta", receta)
      .subscribe(
        data => { this.onListar.emit("Registro insertado") },
        error => console.log(error)
      )
  }

  update(_id: string, receta: Receta): Observable<any> {
    return this.http.put(environment.rutaApiRest + "receta" + _id, receta)
  }

  delete(_id: string): Observable<any> {
    return this.http.delete(environment.rutaApiRest + "receta" + _id)
  }
}
