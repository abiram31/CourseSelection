import { Component, OnInit } from '@angular/core';
import { Course } from "./dataModelClasses";
import { DataModelManagerService } from './data-model-manager.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styles: []
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  constructor(private m: DataModelManagerService) { }

  ngOnInit() {
    this.m.courseGetAll().subscribe(s => {
      this.courses = s
      console.log(s);
    });
  }

}
