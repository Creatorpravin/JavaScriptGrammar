"use strict";
class Person {
    constructor (name) {
      this.name=name;
    }
  
    greet() {
      console.log('good morning ,' + this.name);
    }
}
var obj = new Person('John');
obj.greet();     // good morning , John