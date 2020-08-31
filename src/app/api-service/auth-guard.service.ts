import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const status = await this.authService.authGuard();
    if (status) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

  async canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    //return this.canActivate(route,state)
    const status = await this.authService.authGuard();
    if (status) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
