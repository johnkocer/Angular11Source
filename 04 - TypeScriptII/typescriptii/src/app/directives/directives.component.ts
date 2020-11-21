import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-directives",
  templateUrl: "./directives.component.html",
  styleUrls: ["./directives.component.css"]
})
export class DirectivesComponent implements OnInit {
  students: any[] = [
    { name: "James", gender: "male" },
    { name: "Amy", gender: "female" },
    { name: "Mike", gender: "male" },
    { name: "Hilary", gender: "female" }
  ];
  constructor() {}

  ngOnInit() {}
}
