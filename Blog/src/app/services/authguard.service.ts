import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private authsvc:AuthService, private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.authsvc.GetCurrentUser()) {
      // allow protected routes to be visited if logged in
      return true;
    } else {
      // redirect if not logged in
      this.router.navigate(['/login']);
      return false;
    }
  }
}
