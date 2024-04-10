import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isLoggedIn: boolean;
  spinner: boolean = false;

  routes = [
    { path: '/users', title: 'Users' },
  ];

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout(): void {
    this.spinner = true;

    setTimeout(() => {
      this.authService.logout();
      this.router.navigate(['/login']);
      this.spinner = false;
    }, 500);
  }
}
