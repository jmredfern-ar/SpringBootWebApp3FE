import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Student Registration App v3.0';

  univImage: string = "assets/images/university_image.jpg";
  stuImage: string = "assets/images/students_image.jpg";
  gradImage: string = "assets/images/graduation_image.jpg";
}


