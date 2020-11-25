import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesUrl = 'http://localhost:5000/api/Employees';
  constructor(private http: HttpClient) {}

  /** GET employeees from the server */
  search(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl, httpOptions);
  }

  /** GET employee by id. Will 404 if id not found */
  get(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

/* GET employeees whose name contains search term */
  searchEmployees(name: string): Observable<Employee[]> {
    if (!name.trim()) {
      // if not search term, return empty employee array.
      return of([]);
    }
    // let url=this.employeesUrl+ 'ByName'
    let url=`${this.employeesUrl}/byName/${name}`;
    // let url=`${this.employeesUrl}/${name}`;
    return this.http.get<Employee[]>(url);
  }

  //////// Save methods //////////

  /** POST: add a new employee to the server */
  post(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, httpOptions);
  }

  /** DELETE: delete the employee from the server */
  delete(id: number): Observable<Employee> {
    return this.http.delete<Employee>(
      this.employeesUrl + '/' + id,
      httpOptions
    );
  }

  /** PUT: update the employee on the server */
  put(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      this.employeesUrl + '/' + employee.id,
      employee,
      httpOptions
    );
  }
}

export class Employee {
  public id: number;
  public name: string;
  public gender: string;
  public departmentId: number;
  public salary: number;
}
