import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.css"]
})
export class ListsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.lists();
  }

  lists() {
    var students: Array<Student> = [
      { id: 1, name: "James" },
      { id: 2, name: "Amy" }
    ];
    console.log(JSON.stringify(students));
    // [{"id":1,"name":"James"},{"id":2,"name":"Amy"}]
    // add
    students.push({ id: 3, name: "James3" });
    console.log(JSON.stringify(students));

    // removes the last element from array and returns it
    students.pop();
    console.log(JSON.stringify(students));
    // [{"id":1,"name":"James"},{"id":2,"name":"Amy"}]

    // delete an item with filtered
    students = students.filter(s => s.id != 1);
    console.log(JSON.stringify(students));

    students.push({ id: 3, name: "James3" });
    students.push({ id: 4, name: "James4" });
    const index = students.findIndex(s => s.id === 32);
// returns -1 if not find
    // remove item using splice
    students.splice(index, 1);
    console.log(JSON.stringify(students));
    // [{"id":2,"name":"Amy"},{"id":4,"name":"James4"}]

    // find an item in a list
    const find2 = students.find(s => s.id === 22);
    // returns undefined if not find
    console.log(JSON.stringify(find2));
  }
}

export class Student {
  id: number;
  name: string;
}
