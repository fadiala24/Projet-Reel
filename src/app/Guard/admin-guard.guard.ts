import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminGuardGuard implements CanActivate {
  constructor(
    private router: Router,
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
 
      let loginData =localStorage["isLogin"];
      if(loginData){
      
      
      this.router.navigate(["/userSpace"]);
    return false;
    
  }
  this.router.navigate(["/"]);
  return false;
}
}
