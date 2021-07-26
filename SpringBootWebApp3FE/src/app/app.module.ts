import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { AdminComponent } from './admin/admin.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ScholarshipListComponent } from './scholarship-list/scholarship-list.component';
import { ScholarshipDetailComponent } from './scholarship-detail/scholarship-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    AdminComponent,
    StudentDetailComponent,
    CourseListComponent,
    ScholarshipListComponent,
    ScholarshipDetailComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
