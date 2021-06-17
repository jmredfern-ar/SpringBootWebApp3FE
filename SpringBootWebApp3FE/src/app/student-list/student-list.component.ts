import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students?: Student[];
  
  //BELOW IS THE PHASE 1 CODE FOR DISPLAYING THE STUDENT LIST

  constructor() { }

  ngOnInit(): void {
    this.students = [
      {
        "id":1,
        "name":'Jimi Hendrix',
        "email": 'jh@purplehaze.us',
        dob: new Date('1942-11-07'),
        "age": 27
      },
      {
        "id":2,
        "name":'Stevie Ray Vaughan',
        "email": 'srv@texasblues.tx',
        dob: new Date('1954-10-03'),
        "age": 35
      }
    ]
  }
}
  // constructor(private studentService: StudentService, private router: Router) {}
  // ngOnInit(): void {
  //   this.getStudents();
  // }

  // private getStudents() {
  //   this.studentService.getStudentList().subscribe(data => {
  //     this.students = data;
  //   });
  // }


