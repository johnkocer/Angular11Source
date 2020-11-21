export class BasicTypes {
  constructor() {}
  public booleeans() {
    let boleanDefault: boolean;
    // simple tru/false value
    let isDone: boolean = false;
    //boolean default value
    console.log("boolean default value is: " + boleanDefault);
  }

  public numbers() {
    let numberDefault: number;
    let age: number = 100;
    let payment: number = 50.5;

    console.log("number default value is: " + numberDefault);
    //number default value is: undefined
  }

  public strings() {
    let stringDefault: string;
    let firstString: string = "This is a string";
    let secondString: string = "And so is this";

    console.log("string default value is: " + stringDefault);
    //string default value is: undefined

    //Template String
    let name: string = "John";
    let state: string = "CA";
    let text = `My name is ${name} and I live in ${state}`;
    console.log("Template EX: " + text);
    //Template EX: My name is John and I live in CA
  }

  public ifElseSwitch() {
    let color = "red";
    if (color == "blue") {
      console.log("color is blue");
    } else if (color == "green") {
      console.log("color is green");
    } else {
      console.log("color is neither blue or green");
    }

    switch (color) {
      case "blue":
        console.log("color is blue");
        break;
      case "green":
        console.log("color is green");
        break;
      default:
        console.log("color is neither blue or green");
        break;
    }

    // color is neither blue or green
    // color is neither blue or green
  }

  convertStringToNumber() {
    let value1 = "2";
    let value2 = "3";
    let result = Number(value1) + Number(value2);
    console.log("Result: " + result);
    // Result: 5
  }
} // end
