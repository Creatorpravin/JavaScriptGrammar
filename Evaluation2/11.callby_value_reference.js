// call By value 
var a = "javascript";
var b=a;
var c=b;
a = "html";
console.log(a);     //html
console.log(b);     //javascript
console.log(c);     //javascript

//call by reference
var x={language:"javascript"};
var y=x;
var z=y;
x.language="html";
console.log(x);     //{language: "html"}
console.log(y);     //{language: "html"} 
console.log(z);     //{language: "html"}
