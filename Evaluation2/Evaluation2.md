## 1. Display prime numbers 1 to 200?
```javascript
"use strict";
//get the input
var start = 1;
var end = 200;
var start_type = typeof start;
var end_type = typeof end;
var startConvertToString = start + "" ;
var endConvertToString = end + "" ;
// check if type of value is number or not 
if(start_type === "number" && startConvertToString.indexOf(".")===-1 && end_type==="number" && endConvertToString.indexOf(".")===-1 && start > 0 && end > 0 && start <= end){
    console.log("prime number "+start+" to " +end+ " are : ");
    isprime(start,end);
}else{
    console.log("this value not acctepted");
}
//isprime function
function isprime(s,e){
    for(let number = s ; number <= e ; number++ ){ 
        var flag = true; 
        if(number === 1){
            flag = false;
        }else{ 
        // looping through 2 to number-1
            for (let i = 2; i < number; i++){
                if (number % i == 0) {
                    flag = false;
                    break;
                }
            }
        } 
        if(flag)
           console.log(number);  
    }
}   
```
output :
```
prime number 1 to 200 are :
2
3
5
7
11
13
17
19
23
29
31
37
41
43
47
53
59
61
67
71
73
79
83
89
97
101
103
107
109
113
127
131
137
139
149
151
157
163
167
173
179
181
191
193
197
199
```
## 2. From two sorted arrays, how would you find the common numbers?
```javascript
"use strict";
var array1=[1,2,3,4,5];
var array2=[2,4,8,10,15];
commonNumber(array1, array2); 

function commonNumber(array1, array2) {
    var common = []; 
    for (var i = 0; i < array1.length; i++) {
      for (var j = 0; j < array2.length; j++) {
        if (array1[i] == array2[j]) { 
          common.push(array1[i]); 
        }
      }
    }
   console.log(common); 
}
```
output :
```
[ 2, 4 ]
```

## 3. Explain about function Anatomy, Anonymous function and Assigning function to a variable with an example?
### **function Anatomy :**
```javascript
"use strict";
var total=0;
sum(10);
function sum(x,y=20){
    total=x+y;
    console.log(total);
}
```
output :
```
30
```
### **Anonymous function :**
```javascript
"use strict";
var total=0;
var sum = function(x,y){
    total=x+y;
    console.log(total);
}
sum (10,20);
```
output :
```
30
```
### **Assigning function to a variable :**
```javascript
"use strict";
var total=0;
var multiply = function(x,y){
    total=x*y;
    console.log(total);
}
multiply(10,20);
```
output :
```
200
```
## 4. Show an example ofSafegrounding function parameters?
```javascript
"use strict";
var array=[];
var f=function(){return "This is function";}
myfunction(array);     //pass array instead of function
function myfunction(func){     
    (typeof func =="function")?console.log(func()):console.log("This is not function");
}    
```
output :
```
This is not function
```
## 5. Explain `this` keyword with an example?
```javascript
//"use strict";
var a = 10;
function z(){
    var a = 20;
    console.log(a);
    console.log(this.a);
}
z();
console.log(this);
//this inside object
var obj={
    id:10,
    name:"yuvaraj",
    f:function(){
        console.log(this.id);
    }
};
obj.f();
```
output : (based on node)
```
20
undefined
{}
10
```
## 6. How ‘this’ inside the function and class?
### **‘this’ inside the function**
```javascript
"use strict";
//'this' inside function
var exampleFunction = function () {
    return this;
};
var obj = new exampleFunction();
console.log(obj);
```
output :
```
exampleFunction {}
```
### **‘this’ inside the class**
```javascript
"use strict";
//'this' inside class
var exampleClass=class{
    constructor() {
      return this
    }
}
obj = new exampleClass();
console.log(obj);
```
output :
```
exampleClass {}
```
## 7. Difference between map, reduce and filter methods? With an example
```javascript
"use strict";
var persons = [20,25,15,30,10];
var fullAge = persons.filter(person => person >= 18);
console.log(fullAge);
```
output :
```
[ 20, 25, 30 ]
```
```javascript
"use strict";
var persons = [20,25,15,30,10];
var fullAge = persons.map(person => person*18);
console.log(fullAge);
```
output :
```
[ 360, 450, 270, 540, 180 ]
```
```javascript
"use strict";
var persons = [20,25,15,30,10];
var fullAge = persons.reduce((person,next) => person+next);
console.log(fullAge);
```
output :
```
100
```
## 8. Count Total number of zeros from 1 up to 50
```javascript
"use strict";
var start = 1;
var end = 50;
var start_type = typeof start;
var end_type = typeof end;
var startConvertToString = start + "" ;
var endConvertToString = end + "" ;
if(start_type === "number" && end_type === "number" && startConvertToString.indexOf(".") === -1 && endConvertToString.indexOf(".") === -1){
    var count = 0;
    for(let i = start ; i <= end ; i++ ){
        let numberToString = i + "" ;
        count += numberToString.split("0").length - 1;
    }
    console.log(count);
}
else{
    console.log("This value not accepted");
}
```
output :
```
5
```
## 9. The following array of numbers show the missing number? ([1,2,3,5,6])
```javascript
"use strict";
var array = [1,2,3,5,6];
var max = Math.max(...array); 
var missing = [];
for (var i = 1; i <= max; i++) {
  if (array.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);
```
output:
```
[ 4 ]
```
## 10. Write a program for calculating age using Date of birth? (1990)
```javascript
"use strict";
var birth_year = 1990;
var type=typeof birth_year;
var convertToString = birth_year + "" ;
if(type === "number" && convertToString.indexOf(".") === -1 ){
var year = new Date();
var current_year = year.getFullYear();
var age = current_year - birth_year;
console.log(age);
}else{
    console.log("This value not accepted");
}
```
output :
```
31
```
## 11. In the Javascript function, what are the differences between call by value and reference?
### **call by value**
```javascript
"use strict"; 
var a = "javascript";
var b=a;
var c=b;
a = "html";
console.log(a);     //html
console.log(b);     //javascript
console.log(c);     //javascript
```
output :
```
html
javascript
javascript
```
### **call by reference**
```javascript
"use strict";
var x={language:"javascript"};
var y=x;
var z=y;
x.language="html";
console.log(x);     //{language: "html"}
console.log(y);     //{language: "html"} 
console.log(z);     //{language: "html"}
```
output :
```
{ language: 'html' }
{ language: 'html' }
{ language: 'html' }
```
## 12. What is Arity in Javascript? Explain with a real time example.
```javascript
"use strict";
var arity=date.length;
console.log(arity);
function date(day,month,year){}
```
output :
```
3
```
## 13. What is Currying in Javascript? Explain with a real time example.
```javascript
"use strict";
var volume=function(length) {
    return function(width) {
       return function(height) {
          return height * width * length;
       };
    };
}
console.log(volume(11)(2)(3));
var h=volume(11)(2);
h(3);
var w=volume(11);
w(2);
h(3);
```
output :
```
66
```
## 14. What is ES6?
## 15. What is an anonymous function? Where do we use it? Why do we need it?
```javascript
"use strict";
var total=0;
var multiply = function(x,y){
    total=x*y;
    console.log(total);
}
multiply (10,20);
```
output :
```
200
```
## 16. List the differences between named function and assigning functions to variable with examples
### **named function**
```javascript
"use strict";
var total=0;
function sum(x,y){
    total=x+y;
    console.log(total);
} 
sum(10,20);
```
output :
```
30
```
### **assigning functions to variable**
```javascript
"use strict";
var total=0;
var multiply = function(x,y){
    total=x*y;
    console.log(total);
}
multiply(10,20);
```
output :
```
200
```