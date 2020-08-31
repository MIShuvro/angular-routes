import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class CheckAdmin implements CanActivate {


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (true) {
      return true;
    }
  }
}
