import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsDetService {

    constructor(public h:HttpClient) { 
      //h.get();  R//read data from server to client
      //h.post(); C// send data to the server 
      //h.put();  U//updating data 
      //h.delete; D//delete data
    }
    readstudents()
    {
      return this.h.get<Istudents[]>("http://localhost:3000/students");
    }
    
    readstudentbyid(id:any):Observable<Istudents>
    {
      return this.h.get<Istudents>("http://localhost:3000/students"+id)
    }
    Addstudents(data:any) :Observable<Istudents>
    {
      return this.h.post<Istudents>("http://localhost:3000/students",data)
    } 
    Addstudentsdynamically(data:any):Observable<Istudents>
    {
      return this.h.post<Istudents>("http://localhost:3000/students/",data)
    } 
    DeleteStudents(id:number) :Observable<Istudents>
    {
      return this.h.delete<Istudents>("http://localhost:3000/students/"+id)
    }
    updatestudents(id: any, data: any): Observable<Istudents> {
      return this.h.put<Istudents>("http://localhost:3000/students/" + id, data);
    }
    // private handleError(error: HttpErrorResponse): Observable<never> {
    //   return throwError(() => new Error('An error occurred: ' + error.message));
    // }
}
export interface Istudents{
  id:number;
  studentname:string;
  totalmarks:number
}

