import { Component, OnInit } from '@angular/core';
import { Scholarship } from '../scholarship';
import { ScholarshipService } from '../scholarship.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scholarship-detail',
  templateUrl: './scholarship-detail.component.html',
  styleUrls: ['./scholarship-detail.component.css']
})
export class ScholarshipDetailComponent implements OnInit {

  id?: number;
  scholarship?: Scholarship;

  constructor(private scholarshipService: ScholarshipService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.scholarship = new Scholarship();

    this.scholarshipService.getScholarshipById(this.id).subscribe(data => {
      this.scholarship = data;}
    );
  }

}
