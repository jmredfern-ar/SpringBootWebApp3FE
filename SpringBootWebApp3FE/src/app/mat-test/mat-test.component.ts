import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mat-test',
  templateUrl: './mat-test.component.html',
  styleUrls: ['./mat-test.component.css']
})
export class MatTestComponent implements OnInit {

  @ViewChild("selectedOpt") selectedOpt: any;
  @ViewChild("selectedSubOpt") selectedSubOpt: any;
  menuList: any;
  selected: any;
  subselected: any;

  constructor() {
        this.menuList = [
      {
        name: "Angular"
        //  "subMenu": ["Anguler 1", "Angular 2"]
      },
      {
        name: "Javascript",
        subMenu: ["Jquery", "Ajax"]
      },
      {
        name: "Bootstrap",
        subMenu: ["BootStrap 2", "BootStrap 3"]
      }
    ];
  }

  ngOnInit(): void {
  }

  //   onChange(e) {
  //   this.selected =
  //     this.selected === e.selectedOptions.selected[0].value
  //       ? null
  //       : e.selectedOptions.selected[0].value;
  //   if (!this.selected) {
  //     e.deselectAll();
  //   }
  // }

  // onSubChange(sub) {
  //   this.subselected =
  //     this.subselected === sub.selectedOptions.selected[0].value
  //       ? null
  //       : sub.selectedOptions.selected[0].value;
  //   if (!this.subselected) {
  //     sub.deselectAll();
  //   }
  // }

}
