import { Component, OnInit, ViewChild } from '@angular/core';
// import { ZipOperator } from 'rxjs/internal/observable/zip';

@Component({
  selector: 'app-advisor-profile',
  templateUrl: './advisor-profile.component.html',
  styleUrls: ['./advisor-profile.component.css']
})
export class AdvisorProfileComponent implements OnInit {

  // CLASS PROPERTIES
  @ViewChild("selectedAdvisor") selectedAdvisor: any;
  @ViewChild("selectedDepartment") selectedDepartment: any;
  
  advisor2DepartmentList: any;
  advisorSelected: any;
  departmentSelected: any;

  constructor() {
      this.advisor2DepartmentList = [
        {
          name: "Jeff",
          department: ["Zoology", "Geology"]
        },
        {
          name: "Geoff",
          department: ["Criminal Justice", "Forensics"]
        },
        {
          name: "Jane",
          department: ["Physics", "Chemistry"]
        }
      ];
   }

  ngOnInit(): void {
  }

  onAdvisorChange(e: any) {
    this.advisorSelected = 
      this.advisorSelected === e.selectedOptions.selected[0].value
      ? null
      : e.selectedOptions.selected[0].value;
    if(!this.advisorSelected) {
      e.deselectAll();
    }
  }

  onDepartmentChange(e: any) {
    this.departmentSelected = 
      this.departmentSelected === e.selectedOptions.selected[0].value
        ? null
        : e.selectedOptions.selected[0].value;
    if(!this.departmentSelected) {
      e.deselectAll();
    } 
  }

}
