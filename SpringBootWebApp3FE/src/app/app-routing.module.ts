import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { AdminComponent } from './admin/admin.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ScholarshipListComponent } from './scholarship-list/scholarship-list.component';
import { ScholarshipDetailComponent } from './scholarship-detail/scholarship-detail.component';
import { AdvisorProfileComponent } from './advisor-profile/advisor-profile.component';
import { MatTestComponent } from './mat-test/mat-test.component';

const routes : Routes = [
  {path : 'students', component: StudentListComponent},
  {path : 'courses', component: CourseListComponent},
  {path : 'scholarships', component: ScholarshipListComponent},
  {path: 'create-student', component: CreateStudentComponent },
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'scholarship-detail/:id', component: ScholarshipDetailComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'advisor-profile', component: AdvisorProfileComponent},
  {path: 'mat-test', component: MatTestComponent}
]

@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
