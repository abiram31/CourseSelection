import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DataModelManagerService } from './data-model-manager.service';
@Component({
  selector: 'app-user-account-create',
  templateUrl: './user-account-create.component.html',
  styles: []
})
export class UserAccountCreateComponent implements OnInit {

create: Create;
CreationError: string;
roles: string[] = [
  "Teacher",
  "Student",
  "Janitor",
]
// Initialization

constructor(
  private s: DataModelManagerService,
  
) {

  this.create = new Create();
  this.create.userName = '';
  this.create.password = '';
  this.create.newPass = '';
  this.create.role = '';
  this.create.Name = '';
  this.CreationError = '';
}

  ngOnInit() {
  }
  onSubmit(){
    this.s.create(this.create.userName, this.create.password ,this.create.newPass , this.create.Name, this.create.role);
  }


}
export class Create {
  userName: string;
  password: string;
  newPass: string;
  Name: string;
  role: string;
  }