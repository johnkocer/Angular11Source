import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-classes",
  templateUrl: "./classes.component.html",
  styleUrls: ["./classes.component.css"]
})
export class ClassesComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    //this.objects();
    this.classes01();
  }

  objects() {
    // create a new Object with Object Literals
    let myObject = {
      id: 1,
      name: "Mark"
    };
    console.log(myObject);
    // {id: 1, name: "Mark"}
  }

  classes01() {
    // create a Class with consructor
    class Student {
      // properties (public by default)
      id: number;
      name: string;
      constructor() {
        this.id = 1;
        this.name = "Jen";
      }
    }

    let myStudent = new Student();
    console.log(myStudent);
    // Student {id: 1, name: "Jen"}

    // create a Class with consructor
    class StudentA {
      // properties (public by default)
      id: number;
      name: string;
      // constructor with default values
      constructor(id: number = 2, name: string = "Nancy") {
        this.id = id;
        this.name = name;
      }
    }

    let myStudentA = new StudentA();
    console.log(myStudentA);
    // StudentA {id: 2, name: "Nancy"}

    let myStudentB = new StudentA(5, "James");
    console.log(myStudentB);
    // StudentA {id: 5, name: "James"}

    myStudentB.id = 6;
    myStudentB.name = "Harry";
    console.log(myStudentB);
    // StudentA {id: 6, name: "Harry"}

    // create a Class with properties that have default values
    class Car {
      id: number = 1;
      name: string = "Ford";
    }

    let myCar = new Car();
    console.log(myCar);
    // Car {id: 1, name: "Ford"}

    // create a Class with properties that have NO default values
    class Pet {
      id: number; // default value is undefained
      name: string; // default value is undefained
    }

    let myPet = new Pet();
    console.log(myPet);
    // Pet {}
    console.log(myPet.name, myPet.id);
    // undefined, undefined

    class CarB {
      private _id: number;
      private _name: string;
      constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
      }
      setId(value: number) {
        this._id = value;
      }
      // getter
      getId() {
        return this._id;
      }
      // setter
      setName(value: string) {
        this._name = value;
      }

      getName() {
        return this._name;
      }
      // function
      start(gear: number) {
        console.log("Car started with gear: " + gear);
      }
    }

    let carB = new CarB(0, "");
    carB.setId(2);
    carB.setName("Toyota");

    console.log(`Id: ${carB.getId()} Name: ${carB.getName()}`);
    // Id: 2 Name: Toyota
  }
}
