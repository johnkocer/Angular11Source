import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  public employeeList: Employee[];
  showEditor = true;
  myName: string;
  newEmployee: Employee;
  findEmployee: Employee;

  constructor(private dataService: EmployeeService) {
    this.newEmployee = new Employee();
    this.findEmployee = new Employee();
    this.findEmployee.name = "";
  }

  // if you want to debug info  just uncomment the console.log lines.
  ngOnInit() {
    //    console.log("in ngOnInit");
    //this.employeeList = this.dataService.employeeList;
    this.getAll();
  }

  employeeSeach() {
    console.log("In employeeSearch ");
    if (!this.findEmployee.name.trim()) return;

    this.dataService.searchEmployees(this.findEmployee.name).subscribe(
      (data: Employee[]) => {
        console.log("found employees" + data);
        this.employeeList = data;
      },
      error => {
        console.log("could not get Employees", error);
        this.employeeList = null;
      }
    );
  }
  getAll() {
    console.log("IngetAll ");
    this.dataService.getAll().subscribe(
      (data: Employee[]) => {
        console.log("found employees" + data);
        this.employeeList = data;
      },
      error => {
        console.log("could not get Employees", error);
        this.employeeList = null;
      }
    );
  }

  public addEmployee(item: Employee) {
    //console.dir(item);
    //console.log("In addEmployee: " + this.newEmployee);
    this.dataService.addEmployee(this.newEmployee).subscribe(employee => {
      this.employeeList.push(employee);
      console.dir(employee);
    });
    //console.dir(employeeId);
    //   this.getAll();
  }
  public updateEmployee(item: Employee) {
    console.dir(item);
    //console.log("In updateEmployee: " + item);
    this.dataService.updateEmployee(item).subscribe(employee => {
      //this.employeeList.push(employee);
      console.dir(employee);
      this.getAll();
    });
    //    console.log("in updateEmployee:" );
  }

  public deleteEmployee(employee: Employee) {
    console.log("in deleteEmployee: " + employee.id);
    // this.dataService.deleteEmpoloyee(employeeId);

    this.employeeList = this.employeeList.filter(h => h !== employee);
    this.dataService.deleteEmpoloyee(employee).subscribe();
  }

  findEmployeeById() {
    this.dataService.getEmployeeNo404(this.findEmployee.id).subscribe(e => {
      if (e != undefined) this.findEmployee = e;
    });
  }

  getEmployeeById() {
    this.dataService.getEmployee(this.findEmployee.id).subscribe(
      e => {
        if (e != undefined) this.findEmployee = e;
      },
      error => {
        console.log("could not get Employees", error);
      }
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
