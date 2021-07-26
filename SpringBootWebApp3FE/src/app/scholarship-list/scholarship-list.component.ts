import { Component, OnInit } from '@angular/core';
import { Scholarship } from '../scholarship';
import { ScholarshipService } from '../scholarship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scholarship-list',
  templateUrl: './scholarship-list.component.html',
  styleUrls: ['./scholarship-list.component.css']
})
export class ScholarshipListComponent implements OnInit {

  scholarships: Scholarship[];
  amountTotal: number;
  studentCount: number;

  constructor(private scholarshipService: ScholarshipService,
              private router: Router) {

    this.amountTotal = 0;
    this.scholarships = [];
    this.studentCount = 0;            
  }

  ngOnInit(): void {
    this.getScholarships();
  }

  // LIST ALL SCHOLARSHIPS
  private getScholarships() {
    this.scholarshipService.getScholarshipList().subscribe(data => {
      this.scholarships = data;
      this.sumAmounts();
      this.sumStudents();
      console.log("Scholarship List: ", this.scholarships);
    });
  }

  // DISPLAY INDIVIDUAL SCHOLARSHIP
  viewScholarship(id?: number) {
    this.router.navigate(['scholarship-detail', id]);
    console.log("ScholarshipListComponent.viewScholarship: ", id);
  }

  //  NEW
  sumAmounts() {
    for(var scholarship of this.scholarships) {
      this.amountTotal += scholarship.amount;
    }
  }

  sumStudents() {
    for(var scholarship of this.scholarships) {
      for(let i=0; i <scholarship.students.length; i++) {
        this.studentCount++;
      }
    }
  }

}
