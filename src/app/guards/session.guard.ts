import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AppRoutes} from '../enums/app-routes.enum';
import {SessionService} from '../session/session.service';


/*
* Checks to see if the user is logged in
* If not return to the Landing page
 */
@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly sessionService: SessionService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.sessionService.active()) {
      return true;
    }

    this.router.navigateByUrl(AppRoutes.LOGIN);
    return false;
  }

}
