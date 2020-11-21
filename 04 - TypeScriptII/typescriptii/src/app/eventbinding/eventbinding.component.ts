import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {
columnSpan:number=2;
showDetails:boolean=false;
employee:Employee= new Employee();
  constructor() { }

  ngOnInit() {
  }
toggleDetails(){
  this.showDetails=!this.showDetails;
}
}
export class Employee{
  firstName:string="Chad";
  lastName:string="Wood";
  gender:string="Male";
  age:number=20;
}
