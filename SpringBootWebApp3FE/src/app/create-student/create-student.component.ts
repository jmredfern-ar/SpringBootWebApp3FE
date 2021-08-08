import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  // MEM VARS
  student: Student = new Student();
  ageList: Array<number>;

  bsValue = new Date();
  datePickerConfig: Partial<BsDatepickerConfig>;

  constructor(private studentService: StudentService,
             private router: Router) { 

    this.ageList = [];
    this.datePickerConfig = Object.assign({}, { showWeekNumbers: false,
                                                dateInputFormat: 'YYYY-MM-DD'})  ;
  }

  saveStudent() {
    this.studentService.createStudent(this.student).subscribe( data => {
      this.goToStudentList();
    },
    error => console.log(error));
  }

  ngOnInit(): void {
    this.loadAgeDDList();
  }

  goToStudentList() {
    this.router.navigate(['/students']);
  }

  onSubmit() {
    this.saveStudent();
    console.log(this.student);
  }

  loadAgeDDList() {
    // this.ageList.push(51, 41, 31, 21, 11);
    
    for(let i=100; i>0; i -= 1) {
      this.ageList.push(i)  
    }
  }
}
