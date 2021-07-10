import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseURL = "http://localhost:8082/api/v1/courses";

  constructor(private httpClient: HttpClient) { }

  getCourseList(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.baseURL);
  }
}
