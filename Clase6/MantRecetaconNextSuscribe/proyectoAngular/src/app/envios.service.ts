import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviosService {
  subject: Subject<number> = new Subject()

  constructor() { }

  enviarIndice( indice: number ){
    this.subject.next( indice )
  }
}
