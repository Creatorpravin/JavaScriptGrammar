//constructor
"use strict";
class Car {
    constructor(brand) {  // Constructor
      this.carname = brand;
    }
    show(){
        return 'I have a ' + this.carname;
    }
}
let mycar = new Car("BMW");
console.log(mycar.show());
