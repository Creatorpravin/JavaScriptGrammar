//the typeof operator returns value type in string format
console.log(typeof -1);      //number
console.log(typeof 7);       //number
console.log(typeof 5);       //number
//using Number constructor function to create a number
let number=new Number(7);                   
console.log(typeof number);                 //object
console.log(typeof number.valueOf());       //number