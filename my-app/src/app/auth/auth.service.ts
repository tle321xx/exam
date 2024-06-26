import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isLoggedIn() {
    return of(true).pipe(delay(500));
  }
  // 3 initialize permission
  hasPermissions() {
    return of(true);
  }
}
