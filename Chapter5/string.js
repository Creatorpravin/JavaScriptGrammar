var text1="hello";
var text2="world";
console.log(text1+text2);

console.log(typeof "text");              //string
console.log(typeof "text"+"book");       //string
console.log(typeof "t"+20);              //string
//using string constructor function to create a string
let str=new String("hi.");                   
console.log(typeof str);                 //object
console.log(typeof str.valueOf());       //string