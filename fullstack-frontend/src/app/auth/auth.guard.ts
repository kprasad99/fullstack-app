import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationManager } from './auth.manager';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {


  constructor(private router: Router, private authManager: AuthenticationManager) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authManager.isLoggedIn()) {
      return true;
    } else {
       this.router.navigateByUrl('auth/login');
    }
    return false;
  }

  canLoad(
    route: Route
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authManager.isLoggedIn()) {
      return true;
    } else {
       this.router.navigateByUrl('auth/login');
    }
    return false;
  }

}
