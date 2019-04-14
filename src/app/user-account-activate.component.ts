import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataModelManagerService } from './data-model-manager.service';

@Component({
  selector: 'app-user-account-activate',
  templateUrl: './user-account-activate.component.html',
  styles: []
})
export class UserAccountActivateComponent implements OnInit {
// Properties

activate: Activation;
ActivationError: string;
roles: string[] = [
  "Teacher",
  "Student",
  "Janitor",
]
// Initialization

constructor(
  private s: DataModelManagerService,
  
) {

  this.activate = new Activation();
  this.activate.userName = '';
  this.activate.password = '';
  this.activate.newPass = '';
  this.activate.role = '';
  this.ActivationError = '';
}

  ngOnInit() {
  }
  onSubmit(){
    this.s.activate(this.activate.userName, this.activate.password ,this.activate.newPass ,this.activate.role);
  }

}
export class Activation {
userName: string;
password: string;
newPass: string;
role: string;
}