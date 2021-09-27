## 1. What is the scope of ‘this’ inside the Arrow function? Explain with an example?
In arrow functions there are no binding of `this`.

In arrow functions the `this` keyword always represents the object that defined the arrow function.

`this` is not associated with arrow functions. Arrow function does not have its own `this`. So whenever you call `this`, it refers to its parent scope.

Example:
```javascript
"use strict";
var a = 10;
//this inside arrow function
var b = () => {
    console.log(this);
    console.log(this.a);
}
b();

//this inside object
var obj = {
    myMethod:() => {
        console.log(this);
        console.log(this.a);
    }
};
obj.myMethod();

//this access inside value of object
let myObject = {
    a:20,
    myArrowFunction: null,
    myMethod: function () {
       this.myArrowFunction = () => { console.log(this.a) };
    }
};   
myObject.myMethod(); // this === myObject

myObject.myArrowFunction(); // this === myObject

let myArrowFunction = myObject.myArrowFunction;
myArrowFunction(); //this === myObject
```

## 2. How would you create all permutations of a string?
```javascript
"use strict";
let string="ABC";
function permutation( string, result){
    if(string.length === 0){
        count++;
        console.log(result);
    }else{
        for(let i = 0; i < string.length ; i++ ){
            let remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        }
    }
}
if(typeof string === "string"){
    if(string.length > 0){
        var count = 0;
        permutation( string, "");
        console.log("Total number of permutation are :",count);
    }else{
        console.log("This is empty string");
    }

}else{
    console.log("This is not string")
}
```
**Output**
```
ABC
ACB
BAC
BCA
CAB
CBA
Total number of permutation are : 6
```
## 3. What is the difference between when classic and arrow functions are used as event callbacks?
**Classic function :**

In classic function this property points to the target element that was clicked.

In Classic function  event access the function anywhere in the program.

```html
<html>
    <head>
        <title>Event CallBack</title>
        <script>
         function clicked(){
             console.log("Document was clicked.");
             console.log(this);
         }
         document.addEventListener("click",clicked);
        </script>
    </head>
    <body>
        <h3>Click the document</h3>
    </body>
</html>
```
**Output :**
```
Document was clicked.
#document
```
**Arrow function :**

Inside the arrow function’s scope this property points to Window object.

In Arrow function  event access the function after function declaration.

```html
<html>
    <head>
        <title>Event CallBack</title>
        <script>
          var clicked = () => {
              console.log("Document was clicked.");
              console.log(this);
            }  
         document.addEventListener("click",clicked); 
        </script>
    </head>
    <body>
        <h3>Click the document</h3>
    </body>
</html>
```
**Output :**
```
Document was clicked.
Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

## 4. Look at the code below, you have a for loop if you have setTimeout inside it. If log the loop counter inside setTimeout, what will be logged?

```javascript
for(var i = 0; i < 10; i++) {
setTimeout(function() {
console.log(i);
}, 10);
}
```
First for loop will be executed and store i = 10 in global memeory(window).callback function take the i value from window 
then it print value 10 in every 10mileseconds.

In this problem Environment of all of these function are same.

It refer the global memeory (window object only).

 **Output :**
```
10
10
10
10
10
10
10
10
10
10
```
To fix this use `let`:

```javascript
for(let i = 0; i < 10; i++) {
setTimeout(function() {
console.log(i);
}, 10);
}
```
In this case let have only block scope so everytime loop runs this `i` is a new variable altogether.

**Output :**
```
0
1
2
3
4
5
6
7
8
9
```

## 5. Explain the Class instance method and static method with an example?
**Class instance method :**

Instance method, then you would typically create an object of type one and then call the method on that object (usually in the constructor).

```javascript
"use strict";
class InstanceMethod {
    instanceMethod() {
    return 'instance method has been called.';
  }
}
let obj = new InstanceMethod();
console.log(obj.instanceMethod()); //"instance method has been called."
```
**Output :**
```
instance method has been called.
```
**Class static method :**

The static keyword defines a static method for a class.

Static class methods are defined on the class itself.

You cannot call a static method on an object, only on an object class.

Static methods are called directly on the class without creating an instance/object of the class.

static methods are associated with a class, not the instances of that class. Thus, static methods are useful for defining helper or utility methods.

```javascript
"use strict";
class StaticMethod {
    static staticMethod() {
    return 'static method has been called.';
  }
}
console.log(StaticMethod.staticMethod());  //"static method has been called."
```
**Output :**
```
static method has been called.
```

## 6. How does “this” works inside the Class method with an example?

The behavior of this in classes and functions is similar, since classes are functions under the hood.

Within a class constructor, this is a regular object. All non-static methods within the class are added to the prototype of this.

When using this inside of methods of an class, it points to the current object.

Static methods are not properties of this. They are properties of the class itself.

```javascript
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
```
**Output :**
```
Hi! My name is John
```
## 7. What is the execution order of the following block of code?
```javascript
const ex1 = () => console.log(ex1)
const ex2 = () => console.log(ex2)
const ex = () => {
console.log(ex)
setTimeout(ex1, 1000)
ex2()
}
ex()
```
step 1: script assign the `ex`,`ex1` and `ex2` variable to `undefined`.

step 2: assign function definition to `ex1` variable.

step 3: assign function definition to `ex2` variable.

step 4: assign function definition to `ex` variable.

step 5: execute function call of `ex()`.

step 6: go inside the `ex` function and log the `ex` function definition.

step 7: execute `ex2()` function.

step 8: go inside `ex2` function and log the `ex2` function definition and finish the execution of `ex` function.

step 9: go to the setTimeout callback function wait 1seconds and execute `ex1` function.

step 10: go inside `ex1` function and log the `ex1` function definition.

stpe 11: stop the program.

**Output :**
```
() => {
console.log(ex)
setTimeout(ex1, 1000)
ex2()
}
() => console.log(ex2)
() => console.log(ex1)
```
## 8. Explain the event loop with an example?

An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

The event loop is the secret by which JavaScript gives us an illusion of being multithreaded even though it is single-threaded.

Here the callback function in the event queue has not yet run and is waiting for its time into the stack when the SetTimeOut() is being executed and the Web API is making the mentioned wait. When the function stack becomes empty, the function gets loaded onto the stack as shown below:

```javascript
"use strict";
function task(message) {
    console.log(message);
}
console.log('Start');

setTimeout(() => {
    task('Process');
}, 1000);

console.log('Done');
```
**Output :**
```
Start
Done
Process
```
## 9. Create a custom event listener and explain?

Creating a Custom Event: To create a custom event we use the Event constructor or CustomEvent interface. The Event constructor creates an Event and CustomEvent creates an Event with more functionality.

The below steps are followed in order to create one using a new Event.

We create an event using the Event constructor.

We listen to this event using the addEventListener() method.

We trigger or dispatch the event using element.dispatchEvent(eventName) method.

A custom Event named start has now been created.

```javascript
"use strict";
//create a new custom event  “start”
let startEvent = new Event("start");
//listen for the "start" event
document.addEventListener("start",function(event){console.log("hello world");console.log(event);},false);
//dispatch the “start” event
document.dispatchEvent(startEvent);
```
**Output :**
```
hello world
Event {isTrusted: false, type: 'start', target: document, currentTarget: document, eventPhase: 2, …}
```

## 10. Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example?
**super**

The super keyword refers to the parent class.

It is used to call the constructor of the parent class and to access the parent's properties and methods.

Note :The super keyword is used to access and call functions on an object's parent.

It is mainly used when we want to access a variable, method, or constructor in the base class from the derived class.

```javascript
"use strict";
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    show1() {
      return 'I have a ' + this.carname;
    }
  }
class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show2() {
      return super.show1() + ', it is ' + this.model;
    }
}
let mycar = new Model("Audi", "A6");
mycar.show2();
```
**Output**
```
I have a Audi, it is a A6
```
**constructor**

The constructor() method is a special method for creating and initializing objects created within a class.

The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.

class cannot have more than one constructor() method. This will throw a SyntaxError.

You can use the super() method to call the constructor of a parent class.

```javascript
//constructor
"use strict";
class Car {
    constructor(brand) {  // Constructor
      this.carname = brand;
    }
    show(){
        return 'I have a ' + this.carname;
    }
}
let mycar = new Car("BMW");
console.log(mycar.show());
```
**Output**
```
I have a BMW
```

