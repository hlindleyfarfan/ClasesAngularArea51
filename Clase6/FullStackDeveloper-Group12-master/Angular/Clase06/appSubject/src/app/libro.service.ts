import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  subject: Subject<{}> = new Subject()

  constructor() { }

  editar(){
    this.subject.next( { titulo: "La ciudad y los perros" })
  }

  editar2( novela: Array<{}>){
    this.subject.next( novela )
  }
}
