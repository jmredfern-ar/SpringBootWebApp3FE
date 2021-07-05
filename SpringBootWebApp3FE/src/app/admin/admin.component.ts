import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements AfterViewInit {

  @ViewChild('message') msg: ElementRef;
  
  constructor() {
    this.msg = new ElementRef("test");
   }

  // ngOnInit(): void {
  // }

  ngAfterViewInit() {
    // this.msg = new ElementRef("test");
  }

  onClick() {
    console.log(this.msg.nativeElement.innerHTML);
    // this.msg.nativeElement.innerHTML = "Your message here...";
  }

}
