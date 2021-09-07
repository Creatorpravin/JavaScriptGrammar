"use strict";
// call By value 
let a = "javascript";
let b = a;
let c = b;
a = "html";
console.log(a);     //html
console.log(b);     //javascript
console.log(c);     //javascript

//call by reference
let x = {language:"javascript"};
let y = x;
let z = y;
x.language = "html";
console.log(x);     //{language: "html"}
console.log(y);     //{language: "html"} 
console.log(z);     //{language: "html"}
