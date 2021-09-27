//super
"use strict";
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    show1() {
      return 'I have a ' + this.carname;
    }
  }
class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show2() {
      return super.show1() + ', it is ' + this.model;
    }
}
let mycar = new Model("Audi", "A6");
mycar.show2();