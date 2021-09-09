class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
}
  
class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
}
  
let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());

//prototype inheritance
let animal = {
    eats: true,
    walk() {
      console.log("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };
  
  // walk is taken from the prototype
  rabbit.walk(); // Animal walk