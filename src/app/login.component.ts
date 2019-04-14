import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataModelManagerService } from './data-model-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Properties

  credentials: Credentials;
  loginError: string;

  // Initialization

  constructor(
    private s: DataModelManagerService,
    private router: Router,
    private a: AuthService,
    private jwtHelper: JwtHelperService
  ) {

    this.credentials = new Credentials();
    this.credentials.userName = '';
    this.credentials.password = '';

    this.loginError = '';
  }

  ngOnInit() {
  }

  // Methods

  onSubmit(): void {

    console.log(this.credentials);
    localStorage.removeItem('access_token');
    // Complete this method...
    this.a.login(this.credentials).subscribe( data => {
        let tokenDecoded = this.jwtHelper.decodeToken(data.token);
        localStorage.setItem('access_token', this.a.getToken());
        this.s.getUserbyUserName(tokenDecoded.userName).subscribe(s =>{
          this.s.student = s;
          this.router.navigate(['/students/details']);
        });
      }, error => {
        console.log(error)
        this.loginError = error;
      }
    );


    
    // Clear the existing token

    // Attempt to login, by calling the login method of the auth service
    // If successful...
    //   Save the token in the browser's local storage
    //   Navigate to a landing/info view (home page?)
    // If not successful...
    //   console.log the error
    //   Write an info message in the loginError property

  }

}

// User name and password

export class Credentials {
  userName: string;
  password: string;
}