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
The function definition consists of the function keyword followed by its name parenthesis containing a list of parameter names (a,b,c) and the function body enclosed in brackets.

The return keyword is optional. But function will return anyway once all statements in its body are done executing, even if return keyword is not specified.
```javascript
"use strict";
var total=0;
sum(10);
function sum(x,y = 20){
    total = x + y;
    console.log(total);
}
```
output :
```
30
```
### **Anonymous function :**

Anonymous functions are functions without names.

uses: 

Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.

Anonymous functions are often used as event callbacks, where we usually don’t need to know what the names are – we simply want to execute them at a specific time after an event has finished doing its work.

```javascript
"use strict";
var total = 0;
var sum = function(x,y){
    total = x + y;
    console.log(total);
}
sum (10,20);
```
output :
```
30
```
### **Assigning function to a variable :**
Anonymous functions can be assigned to a variable, making them named functions again.

uses:

By doing this you can separate the function definition from its use in an event-based method.

This makes your code look cleaner. 

```javascript
"use strict";
var total = 0;
var multiply = function(x,y){
    total = x * y;
    console.log(total);
}
multiply(10,20);
```
output :
```
200
```
## 4. Show an example ofSafegrounding function parameters?
The solution is to safeguard the value by checking its type. 
JavaScript has a built-in directive typeof that we can use before calling the function.

```javascript
"use strict";
var array = [];
var f=function(){return "This is function";}
myfunction(array);     //pass array instead of function
function myfunction(func){     
    (typeof func == "function")?console.log(func()):console.log("This is not function");
}    
```
output :
```
This is not function
```
## 5. Explain `this` keyword with an example?

The this keyword is a reference variable that refers to the current object.

It is reuse functions in different execution contexts. It means, a function once defined can be invoked for different objects using the this keyword.

It id identifying the object in the current execution context when we invoke a method.

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
var obj = {
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

In a function, this refers to the global object.

In a function, in strict mode, this is undefined.

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

This keyword is used inside of a class and refers to the current instance.

```javascript
"use strict";
//'this' inside class
var exampleClass = class{
    constructor() {
      return this;
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
### **filter**

The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

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
### **map**
he map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

map() does not execute the function for empty elements.

map() does not change the original array.
```javascript
"use strict";
var persons = [20,25,15,30,10];
var fullAge = persons.map(person => person * 18);
console.log(fullAge);
```
output :
```
[ 360, 450, 270, 540, 180 ]
```
### **reduce**

The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

```javascript
"use strict";
var persons = [20,25,15,30,10];
var fullAge = persons.reduce((person,next) => person + next);
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
The original variable is not modified on changes in other variables.

Actual and copied variables will be created in different memory locations.

On passing variables in a function, any changes made in the passed variable will not affect the original one.

**Features of call by value:**

Function arguments are always passed by value.

It copies the value of a variable passed in a function to a local variable.

Both these variables occupy separate locations in memory. Thus, if changes are made in a particular variable it does not affect the other one.
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

The original variable gets modified on changes in other variables.

Actual and copied variables are created in the same memory location.

On passing variables in a function, any changes made in the passed parameter will update the original variable’s reference too.

**Features of Call By reference:**

In JavaScript, all objects interact by reference.

If an object is stored in a variable and that variable is made equal to another variable then both of them occupy the same location in memory.

Changes in one object variable affect the other object variable.

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
Arity is the number of arguments a function takes.

You can access function’s arity via Function.length property.

```javascript
"use strict";
var arity=Date.length;
console.log(arity);
function Date(day,month,year){}
```
output :
```
3
```
## 13. What is Currying in Javascript? Explain with a real time example.

Currying is a pattern that immediately evaluates and returns another function expression.

A curried function can be constructed by chaining closures by defining and immediately returning all inner functions at the same time.

Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

For example A curried function is a function that takes multiple arguments one at a time. Given a function with 3 parameters, the curried version will take one argument and return a function that takes the next argument, which returns a function that takes the third argument. The last function returns the result of applying the function to all of its arguments.

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

This update adds significant new syntax for writing complex applications, including class declarations (class Foo { ... }), ES6 modules like import * as moduleName from "..."; export const Foo, but defines them semantically in the same terms as ECMAScript 5 strict mode.

Other new features include:

iterators and for...of loops

arrow function expression (() => {...})

let keyword for local declarations

const keyword for constant local declarations

binary data

typed arrays 

new collections (maps, sets and WeakMap) 

promises 

number and math enhancements 

reflection 

proxies (metaprogramming for virtual objects and wrappers)

template literals for strings.

## 15. What is an anonymous function? Where do we use it? Why do we need it?
Anonymous functions are functions without names.

uses: 

Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.

Anonymous functions are often used as event callbacks, where we usually don’t need to know what the names are – we simply want to execute them at a specific time after an event has finished doing its work.

need:

anonymous function may be syntactically lighter than using a named function.

anonymous function needed when function is called in one place in the program.
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

The function call anywhere in the program.

Use methods before declaration.

named function are useful for a good debugging experience.

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

The function call after the function assigned to the variable.if it is call before the function assign to variable it throw the typeError like multiply is not function.

Use methods after declaration

assigning function to variable may be syntactically lighter than using a named function.

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