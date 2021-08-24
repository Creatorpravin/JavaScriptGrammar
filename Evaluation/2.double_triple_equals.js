"use strict";
console.log(0==false);  //true, because false is equivalent of 0
console.log(0===false);  //false, because both operands are of different type
console.log(2=="2");  //true, auto type coercion,string converted into number
console.log(2==="2");  //false,since both operands are not of same type