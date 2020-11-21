import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
printText:string="";
  constructor() { }

  ngOnInit() {
    this.printText="One \n Two \n Three\n Gour";
  }

  printComments(cmpName) {
//    this.printText ="";
    var target = document.getElementById(cmpName);
//this.printText=target.innerHTML;
    var orig = target.className;
    target.className += " print-content";
    window.print();
    target.className = orig;
  }
}
