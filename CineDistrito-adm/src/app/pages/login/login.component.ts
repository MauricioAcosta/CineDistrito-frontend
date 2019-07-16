import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  loginData = {
    username: "",
    password: ""
  }
  constructor(private service: LoginService, private route:Router) { }

  public login() {
    this.service.login(this.loginData.username, this.loginData.password).subscribe(
      response => {
        console.log(response);
        this.route.navigate(['inicio']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
