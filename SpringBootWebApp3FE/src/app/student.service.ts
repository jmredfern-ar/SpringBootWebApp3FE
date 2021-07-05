import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8082/api/v1/students";
  
  constructor(private httpClient: HttpClient) { }

  getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseURL);
  }

  createStudent(student: Student): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, student);
  } 

  // here
  getStudentById(id?: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudent(id?: number, student?: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, student);
  }
  //here
  
  deleteStudent(id?: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
