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
import { User } from "./dataModelClasses";
import { USERS} from "./users";
@Injectable({
  providedIn: 'root'
})
export  class DataModelManagerService {
  private URL: string = 'https://floating-hamlet-45688.herokuapp.com/api/students';
  private user: string = 'herokuforUsers.com/api/users';
  public student: Student;
  public coursesChosen: Course[] = [];
  constructor(private http: HttpClient) { }
  personsGetAll(): Observable<Student[]> {
    return of(STUDENTS);
    //return this.http.get<Student[]>(this.url);
  }
  courseGetAll(): Observable<Course[]>{
    return of(COURSES);
  }
  personsGetById(studentId: string): Observable<Student> {
    for (var i=0; i <28; i++){
      if (STUDENTS[i].studentId == studentId){
        console.log(STUDENTS[i]);
        return of(STUDENTS[i]);
        //return this.http.get<Student>(`${this.url}/${email}`);
      }
        
    }
  }
  activate(userName: string, password: string, newPass: string, role: string): Observable<any> {
    return this.http.post(`${this.user}/activate`, {
      userName: userName,
      password: password,
      passwordConfirm: newPass,
      role: role
    })
  }
  create(userName: string, password: string, newPass: string, fullName: string,  role: string): Observable<any> {
    return this.http.post(`${this.user}/create`, {
      userName: userName,
      password: password,
      passwordConfirm: newPass,
      fullName: fullName,
      role: role
    })
  }

  personsGetByEmail(email: string): Observable<Student> {
    for (var i=0; i <28; i++){
      if (STUDENTS[i].email == email){
        return of(STUDENTS[i]);
      }
        
    }
  }
  getUserbyUserName(userName: string): Observable<Student> {
    return this.http.get<Student>(`${this.URL}/username/${userName}`);
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

