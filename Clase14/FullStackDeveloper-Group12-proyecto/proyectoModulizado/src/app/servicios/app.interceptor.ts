import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, retry, catchError } from "rxjs/operators"

export class AppInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = ""

    if (sessionStorage.getItem("token")) {
      token = "Bearer " + sessionStorage.getItem("token")
    }

    let peticionClonada = req.clone({ headers: req.headers.append("Authorization", token) })

    return next.handle(peticionClonada)
      .pipe(
        tap(() => console.log("petición clonada")),
        retry(3),
        catchError((error: HttpErrorResponse) => {
          console.log(error)
          return throwError("Un error ha ocurrido")
        })
      )
  }
}
