/**
 * The heroku link specified below is not mine but someone else's, i used it because i could not get mine to work properly
 */
import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from "./dataModelClasses";
import { STUDENTS } from "./students";
import { Observable, of } from 'rxjs';
import { COURSES} from "./courses";
import { Course } from "./dataModelClasses";
@Injectable({
  providedIn: 'root'
})
export  class DataModelManagerService {
  private url: string = 'https://peaceful-earth-34799.herokuapp.com/api/students';
  public student: Student;
  public coursesChosen: Course[] = [];
  constructor(private http: HttpClient) { }
  personsGetAll(): Observable<Student[]> {
    //return of(STUDENTS);
    return this.http.get<Student[]>(this.url);
  }
  courseGetAll(): Observable<Course[]>{
    return of(COURSES);
  }
  personsGetById(studentId: string): Observable<Student> {
    for (var i=0; i <28; i++){
      if (STUDENTS[i].studentId == studentId){
        //return of(STUDENTS[i]);
        return this.http.get<Student>(`${this.url}/${studentId}`);
      }
        
    }
  }
  
  getStudent(): Student{
    console.log(this.student);
    return this.student;
  }
  setStudent(studentId: string){
    for (var i=0; i <28; i++){
      if (STUDENTS[i].studentId == studentId){
        this.student = STUDENTS[i];
        console.log(this.student );
      }
        
    }
  }
  courseGetById(courseId: number): Observable<Course>{
    for (var j=0;j<1258;j++){
      if (COURSES[j].courseId == courseId){
        return of(COURSES[j])
      }
    }
  }
  getFutureCourses(studentId: string): Observable<Course[]>{
    let tempArray: Course[] = [];
    var count = 0;
  var exists = false;
  console.log(STUDENTS)
   for (var i=0; i <28; i++){
    if (STUDENTS[i].studentId == studentId){
         for (var j=0;j < COURSES.length;j++){
           for (var p=0; p < COURSES[j].prerequisite.length; p++){
             for (var l=0;l < STUDENTS[i].credits.length;l++){
              if (STUDENTS[i].credits[l].courseCode === COURSES[j].prerequisite[p] && COURSES[j].term == "2019 Winter"){
                    tempArray[count] = COURSES[j];
                    count++
                  
                 }
              
             }
            
           }
         }
    }
  }
  var temp2: Course[] = [];
  count = 0;
  for (var k=0;k < tempArray.length; k++){
    for (var i=0; i <28; i++){
      if (STUDENTS[i].studentId == studentId){
        for (var j=0;j < STUDENTS[i].credits.length; j++){
          if (STUDENTS[i].credits[j].courseCode == tempArray[k].courseCode){
            exists = true;
          }
        
        }
      }
    }
    if (!exists){
      temp2.push(tempArray[k]);
    }
    exists = false;
  }


  
  
  console.log(temp2)
  return of(temp2);
    

  }
  getCourseCount(studentId: string): Number{
      for (var i=0; i < STUDENTS.length; i++){
        if (STUDENTS[i].studentId == studentId){
          return STUDENTS[i].credits.length;
        }
      }
  }
  
}

