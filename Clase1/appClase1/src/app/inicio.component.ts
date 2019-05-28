import { Component } from "@angular/core";

@Component({
  selector: "app-inicio",//puede ser .app-inicio o [app-inicio] pero cambia en el index.html
 /* template: `
  <h1>Componente inicio: {{titulo}}</h1>
    <table>
    <tr>
    <td>Angular</td>
    <td>Mongo</td></tr>
    </table>`,*/
    // lo del {{titulo}} se llama interpolación

  templateUrl: "./inicio.component.html",
  //styles: ["h1 {color:red;font-family:Arial}"]
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent {
  titulo: string = "FullStack en Javascript"

}
