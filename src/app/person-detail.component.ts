import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from "./dataModelClasses";
import { DataModelManagerService } from './data-model-manager.service';
import { Course } from "./dataModelClasses";
import { STUDENTS } from "./students";
@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  coursesChosen: Course[] = [];
  studentId: string;
  userName: string;
  student: Student;
  futureCourses: Course;
  courses: Course[];
  courseCount: Number;
  constructor(private route: ActivatedRoute, private s: DataModelManagerService) { }

  ngOnInit() {
    this.student = this.s.student;
    //this.studentId = this.route.snapshot.paramMap.get("studentId");
    //this.userName = this.route.snapshot.paramMap.get("userName");
    //console.log(this.userName);
    /*
    this.s.personsGetByEmail(this.userName).subscribe(studentData => {
      console.log(studentData);
      this.student = studentData;
    });
    */
    this.s.getFutureCourses(this.studentId).subscribe(s =>{
      this.courses = s;
    });

    this.courseCount = this.s.getCourseCount(this.studentId)
    for (var i=0; i <28; i++){
      if (STUDENTS[i].studentId == this.studentId){
        this.student = STUDENTS[i];
      }
        
    }
    console.log(this.student);
    console.log(this.studentId);
    this.s.student = this.student; 
    console.log(this.s.student);
    this.coursesChosen = this.s.coursesChosen;
    console.log(this.coursesChosen);
  }
  ngOnDestroy(){
    this.s.coursesChosen=this.coursesChosen;
  }
}

