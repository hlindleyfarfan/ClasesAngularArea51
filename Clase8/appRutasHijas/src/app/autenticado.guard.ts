
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Inject, inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AutenticadoGuard implements CanActivate{

    canActivate():boolean{
      return false//para q deje o no deje entrar
    }
}
