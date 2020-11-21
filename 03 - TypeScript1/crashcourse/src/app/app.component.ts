import { Component } from '@angular/core';
import { Variable01, Variable02, BasicTypes, Loops } from "./variables";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crashcourse';
  myName;
  // string
  myString: string = "hello";
  myAge: number = 21;
  isSuccess: boolean = true;
  whatEver: any = "One" + 2;

  myNumbers: number[] = [1, 2, 3];
  myNumbers2: Array<number> = [1, 2, 3];

  person: Person;
  todos: Todo[];
  //////////// interface
  // let person: Person{
  //   title:"CEO",
  //   name:"Jacy",
  //   age:26
  // };

  mySize: Size = Size.XL;
  myCar: Car; // declaration
  todoIs2: Todo;
  arrayList: any;

  valriable01: Variable01 = new Variable01();
  basicTypes: BasicTypes = new BasicTypes();

  loops: Loops = new Loops();

  constructor() {
    this.myCar = new Car();
  }
  ngOnInit() {
    // this.person = {
    //   title: "CEO",
    //   name: "Jacy",
    //   age: 26
    // };
    //["a", "b", "c"].map((letter, index) => console.log(index, letter));
    //console.log(this.pi);
    //this.checkNull();

    //this.todos = TODOS;
    // this.deleteItemFromArray();
    // this.insertItemIntoArray();
    // this.foreachArrayItems();
    //this.funtions01();
    // arrow function
    this.arrowFuntion01();
  //  this.valriable01.myFuntion();
   // this.basicTypes.booleeans();
    //this.basicTypes.numbers();
    //this.basicTypes.strings();
   // this.basicTypes.ifElseSwitch();
   this.loops.forLoop();
  // this.basicTypes.convertStringToNumber();
  }

  arrowFuntion01() {
    //let myFunc=(nameFunction)=>("Hi "+ nameFunction()) + ".");
    //let printName=(nameFunction, printFunction) => printFunction(myFunc(nameFunction));
    let products = [
      { name: "Pen", price: 1.0, stock: 10 },
      { name: "Ice", price: 2.0, stock: 1 },
      { name: "Ballon", price: 10, stock: 0 },
      { name: "Candy", price: 3.0, stock: 1 }
    ];
    let totalValue = products
      .filter(item => item.stock > 0)
      .reduce((prev, item) => prev + item.price * item.stock, 0);
    console.log("Total value: $" + totalValue.toFixed(2));
    //Total value: $15.00
  }
  funtions01() {
    let myFun = function() {
      console.log("This is a statement");
    };

    myFun();
  }
  multiply(a: number, b: number): number {
    return a * b;
  }

  checkNull() {
    let isNull = undefined;
    if (isNull) {
      console.log("in isNull");
    }

    if (!!isNull) {
      console.log("in !!isNull");
    }
    isNull = 2;
    if (!!isNull) {
      console.log("in isNull=2 !!isNull");
    }

    isNull = null;
    if (!!isNull) {
      console.log("in isNull=null !!isNull");
    }

    isNull = NaN;
    if (!!isNull) {
      console.log("in isNull=NaN !!isNull");
    }

    isNull = "";
    if (!!isNull) {
      console.log("in isNull='''' !!isNull");
    }

    isNull = true;
    if (!!isNull) {
      console.log("in isNull=true !!isNull");
    }
  }

  deleteItemFromArray() {
    this.arrayList = this.todos.splice(1, 1);
    console.log("after delere row 1" + JSON.stringify(this.arrayList));
    console.log("after delere row 1 todos" + JSON.stringify(this.todos));
  }

  insertItemIntoArray() {
    console.log("befire new  row 1 todos" + JSON.stringify(this.todos));

    //this.todos.push(new Todo{id:11,name:"New Guy"});
    // console.log("after delere row 1" + JSON.stringify(this.arrayList));
    console.log("after new  row 1 todos" + JSON.stringify(this.todos));
  }

  foreachArrayItems() {
    console.log("for each todos" + JSON.stringify(this.todos));

    this.todos.forEach(t => {
      console.log(t.id + " - " + t.name);
    });
    // console.log("after delere row 1" + JSON.stringify(this.arrayList));
    console.log("after new  row 1 todos" + JSON.stringify(this.todos));
  }
} // end

export interface Person {
  title: string; // optoinal
  name: string;
  age?: number; // optoinal
}

export enum Size {
  S,
  M,
  L,
  XL,
  XXL
}

export class Car {
  name: string = "Ford";
  price: number = 20000;
}

export const TODOS: Todo[] = [
  { id: 1, name: "Go to the shopping" },
  { id: 2, name: "Feed the cat" },
  { id: 3, name: "Walk the dog" },
  { id: 4, name: "Buy gas" },
  { id: 9, name: "Take a break" },
  { id: 10, name: "Call mommy" }
];

export class Todo {
  id: number;
  name: string;
}
