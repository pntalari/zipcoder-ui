import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-auth-logout',
  template: ''
})
export class AuthLogoutComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.auth.logout();
    this.router.navigate(['/']);
  }

}
