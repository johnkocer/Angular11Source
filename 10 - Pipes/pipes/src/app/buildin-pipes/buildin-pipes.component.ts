import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buildin-pipes",
  templateUrl: "./buildin-pipes.component.html",
  styleUrls: ["./buildin-pipes.component.css"]
})
export class BuildinPipesComponent implements OnInit {
  name: string = "John";
  city: string = "ISTANBUL";
  todaysDate: Date = new Date();
  price: number = 100;

  persons = [
    { gender: "male", name: "James Bold" },
    { gender: "female", name: "Cindy Bold" },
    { gender: "female", name: "Gold Fish Bold" }
  ];
  constructor() {}

  ngOnInit() {}
}
