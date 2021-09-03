"use strict";
//'this' inside function
var exampleFunction = function () {
    return this;
};
var obj = new exampleFunction();
console.log(obj);

//'this' inside class
var exampleClass=class{
    constructor() {
      return this
    }
}
obj = new exampleClass();
console.log(obj);
