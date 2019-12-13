import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/services';
import { ToastyService } from 'ng2-toasty';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  Auth: AuthService;
  credentials: any = {
    email: '',
    password: ''
  };
  logoUrl: any;

  constructor(auth: AuthService, public router: Router, private route: ActivatedRoute, private toasty: ToastyService) {
    this.logoUrl = route.snapshot.data['appConfig'] ? route.snapshot.data['appConfig'].siteLogo : '/assets/images/logo.jpg';
    this.Auth = auth;

    if (auth.isLoggedin()) {
      this.router.navigate(['/starter']);
    }
  }

  login() {
    this.Auth.login(this.credentials).then((resp) => this.router.navigate(['/starter']))
      .catch((err) => {
        if (err.data.data.message) {
          return this.toasty.error(err.data.data.message);
        }
        return this.toasty.error('Something went wrong, please try again!');
      });
  }
}
