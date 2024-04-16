import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// 4 
export class PermissionsGuard implements CanActivateChild {
  constructor(private auth: AuthService) {}
  canActivateChild():
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
      // ให้มันแสดงเมื่อมีการทำงานของ permission ซึ่งจาก path คือทำงานในส่วนของ add user, add product
    console.log('I am checking permissions....');
    return this.auth.hasPermissions();
  }
}
