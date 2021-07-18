import { Component, OnInit } from '@angular/core';
import { Scholarship } from '../scholarship';
import { ScholarshipService } from '../scholarship.service';

@Component({
  selector: 'app-scholarship-list',
  templateUrl: './scholarship-list.component.html',
  styleUrls: ['./scholarship-list.component.css']
})
export class ScholarshipListComponent implements OnInit {

  scholarships?: Scholarship[];

  constructor(private scholarshipService: ScholarshipService) { }

  ngOnInit(): void {
    this.getScholarships();
  }

  private getScholarships() {
    this.scholarshipService.getScholarshipList().subscribe(data => {
      this.scholarships = data;
      console.log("Scholarship List: ", this.scholarships);
    });
  }
}
