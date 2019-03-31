import { Component, OnInit } from '@angular/core';
import { Student } from "./dataModelClasses";
import { DataModelManagerService } from './data-model-manager.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  students: Student[];
  constructor(private m: DataModelManagerService) { }

  ngOnInit() {
    this.m.personsGetAll().subscribe(s => {
      this.students = s
      console.log(s);
    });
  }

}
