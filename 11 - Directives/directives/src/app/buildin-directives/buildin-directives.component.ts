import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildin-directives',
  templateUrl: './buildin-directives.component.html',
  styleUrls: ['./buildin-directives.component.css']
})
export class BuildinDirectivesComponent implements OnInit {
  isShowHide = false;
  status = 2;

  persons = [
    { gender: "male", name: "James Bold" },
    { gender: "female", name: "Cindy Bold" },
    { gender: "female", name: "Gold Fish Bold" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowHide() {
    this.isShowHide = !this.isShowHide;
  }


}
