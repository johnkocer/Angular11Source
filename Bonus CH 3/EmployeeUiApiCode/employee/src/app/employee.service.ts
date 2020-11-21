import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 // httpOptions = new HttpHeaders().set('Content-Type', 'application/json');
  //private employeesUrl = 'api/employees';  // URL to web api
  private employeesUrl = 'http://localhost:5000/api/';

  constructor(
    private http: HttpClient,
    // private messageService: MessageService
  ) { }

  /** GET employeees from the server */
  getAll (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl + 'GetEmployees')
      .pipe(
        //tap(employeees => this.log('fetched employeees')),
         catchError(this.handleError('getemployeees', []))
      )      ;
  }

  // /** GET employee by id. Return `undefined` when id not found */
  // getEmployeeNo404<Data>(id: number): Observable<Employee> {
  //   const url = `${this.employeesUrl}GetEmployee/${id}`;
  //   return this.http.get<Employee[]>(url)
  //     .pipe(
  //       map(employeees => employeees[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? `fetched` : `did not find`;
  //         console.log(`${outcome} employee id=${id}`);
  //       }),
  //       catchError(this.handleError<Employee>(`getemployee id=${id}`))
  //     );
  // }

  /** GET employee by id. Will 404 if id not found */
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}GetEmployee/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => console.log(`fetched employee id=${id}`)),
      catchError(this.handleError<Employee>(`getemployee id=${id}`))
    );
  }

  /* GET employeees whose name contains search term */
  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty employee array.
      return of([]);
    }
    console.log(httpOptions);
    return this.http.get<Employee[]>(`${this.employeesUrl}GetEmployeeByName/${term}`).pipe(
      tap(_ => console.log(`found employeees matching "${term}"`)),
      catchError(this.handleError<Employee[]>('searchemployeees', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new employee to the server */
  addEmployee (employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.employeesUrl + 'AddEmployee', employee, httpOptions).pipe(
      tap((employee: Employee) => console.log(`added employee w/ id=${employee.id}`)),
      catchError(this.handleError<Employee>('addemployee'))
    );
  }

  /** DELETE: delete the employee from the server */
  deleteEmpoloyee (employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteemployee'))
    );
  }

  /** PUT: update the employee on the server */
  updateEmployee (employee: Employee): Observable<Employee> {
    return this.http.put(this.employeesUrl + 'updateEmployee/' + employee.id, employee, httpOptions).pipe(
      tap(_ => console.log(`updated employee id=${employee.id}`)),
      catchError(this.handleError<any>('updateemployee'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // /** Log a employeeService message with the MessageService */
  // private log(message: string) {
  //   this.messageService.add(`employeeService: ${message}`);
  // }
}

export class Employee {
  public id: number;
  public name: string;
  public gender: string;
  public departmentId: number;
  public salary: number;
}
