import { Time } from '@angular/common';

export class credit{
    courseCode: string;
    courseName: string;
    termCompleted: string;
    gradeEarned: string;
}

export class Student {
    studentId: string;
    givenName: string;
    familyName: string;
    email: string;
    academicLevel: number;
    birthDate: string;
    gpa: number;
    academicProgram: string;
    credits: credit[];

}

export class Course{
    courseId: number;
    term: string;
    academicProgram: string;
    level: number;
    prerequisite: string[];
    courseCode: string;
    section: string;
    termSectionId: number;
    enrolCapacity: number;
    enrolTotal: number;
    room: string;
    roomCapacity: number;
    classStart: string;
    classEnd: string;
    classMon: string;
    classTue: string;
    classWed: string;
    classThu: string;
    classFri: string;
    dateStart: string;
    dateEnd: string;
    professor: String;
}