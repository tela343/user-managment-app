import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
  }

  login(): void {
    this.isLoggedIn = true;
    sessionStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    this.isLoggedIn = false;
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('token');
  }
}
