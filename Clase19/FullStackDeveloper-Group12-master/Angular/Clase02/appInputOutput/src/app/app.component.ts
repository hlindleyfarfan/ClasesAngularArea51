import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos: Array<string> = ["Karla", "Juan", "Alfonso", "Viviana", "Pedro", "Inés", "Alfonsina"]

  usuarios: Array<object> = [
    { username: "usuario 1", area: "area 1" },
    { username: "usuario 2", area: "area 2" },
    { username: "usuario 3", area: "area 3" }
  ]


  title = 'appInputOutput';
}
