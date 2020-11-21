export class Loops {
  constructor() {}

  public forLoop() {
    let lista = ["Red", "Blue", 'Green'];
    let products = [
      { name: "Pen", price: 1.0, stock: 10 },
      { name: "Ice", price: 2.0, stock: 1 },
      { name: "Ballon", price: 10, stock: 0 },
      { name: "Candy", price: 3.0, stock: 1 }
    ];

    // returns list of keys
    for (let i in lista) {
      console.log(i); // "0", "1", "2",
    }

    // returns list of values
    for (let i of lista) {
      console.log(i); // "Red", "Blue", "Green"
    }

    lista.forEach((value, index) => {
      // debugger;
      console.log("Index " + index + " : " + value);
    }); // Index 0 : Red  Index 1 : Blue  Index 2 : Green
    for (let i = 0; i < products.length; i++) {
      console.log(products[i].name);
    }
  }
} // end
