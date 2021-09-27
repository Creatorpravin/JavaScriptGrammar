## 2.How would you create all permutations of a string?
### Algorithm :
step 1: initialize strict mode in globally and variable string with input value

step 2: create a function definition for permutation with parameter string and result.

step 3: check string length is equal to zero if it is true then go to next step. else goto step 5.

step 4: increment the count and display result value.

step 5: go inside loop initialize i = 0 execute until i < string.length-1.

step 6: using substrin split the string value and store in remain variable.

step 7: call the permutation function with argument remain and result+string[i].this execute recursively and terminate when for condition fails.

step 8: check type of input is equal to string. if it string then go to next step. else go to 13.

step 9: check input is empty string or not. if it not empty then go to next step. else go to step 12.

step 10: initailze the count value equal to zero and call the permutation function with string as argument.goto step 3.afetr execute functio go to next step.

step 11: print the number of combination.

step 12: print this is empty string.go to step 14.

step 13: print this not string.go to next step.

step 14: stop.

### Pseudocode :
```
"use strict";
string = INPUT
FUNCTION permutation( string, result)
    IF(string.length === 0) THEN
        INCREMENT count;
        PRINT (result);
    ELSE 
        FOR (i = 0 to string.length -1 )
            remain = string.substring( 0, i) + string.substring( i + 1 );
            permutation( remain, result + string[i]);
        ENDFOR
    ENDIF
ENDFUNCTION permutation
IF (typeof string === "string") THEN
    IF(string.length > 0){
        INIT count = 0;
        permutation( string, "");
        PRINT ("Total number of permutation are :",count)
    ELSE
        PRINT ("This is empty string")
    ENDIF    
ELSE
    PRINT ("This is not string")
ENDIF    
```
## 5. Explain the Class instance method and static method with an example?
**Class instance method :**
### Algorithm :
step 1: initialize strict mode in globally.

step 2: create class with name InstanceMethod.

step 3: create method with name of instancemethod and return the string instance method has been called.

step 4: initialize obj variable with constructor object.

step 5: call instance method using instance of class.

step 6: print instance method.

step 7: stop.

### Pseudocode :
```
"use strict";
CLASS InstanceMethod 
    instanceMethod() 
        RETURN 'instance method has been called.';
    ENDFUNCTION
ENDCLASS    
INIT obj = new InstanceMethod();
PRINT (obj.instanceMethod()); 
```
**Class static method :**
### Algorithm :
step 1: initialize strict mode in globally.

step 2: create class with name StaticMethod.

step 3: create method with name of staticmethod and return the string static method has been called.

step 4: static keyword is used for staticMethod.

step 5: call the static method using class name.

step 5: print static method.

step 6: stop.

### Pseudocode :
```
"use strict";
CLASS StaticMethod 
    STATIC staticMethod() 
       RETURN 'static method has been called.';
    ENDFUNCTION
ENDCLASS
PRINT (StaticMethod.staticMethod());
```
## 6. How does “this” works inside the Class method with an example?
### Algorithm :
step 1: initialize strict mode in globally.

step 2: create class with name Person.

step 3: create constructor method with parameter name.

step 4: assign this.name = name.

step 5: create greet method and print goodmorning with name using this keyword.

step 6: initialize the obj variable and assign Person object to obj and pass john name to constructor.

step 7: call greet method use obj object.

step 8: stop.

### Pseudocode :
```
"use strict";
CLASS Person 
    constructor (name) 
      this.name=name;
    ENDFUNCTION constructor 
    greet() 
      PRINT ('good morning ,' + this.name);
    END greet
ENDCLASS
INIT obj = new Person('John');
obj.greet();    
```
## 8. Explain the event loop with an example?
### Algorithm :
step 1: initialize strict mode in globally.

step 2: create function definition for print message.

step 3: print start.

step 4: create event setTimeout with arrow function and call task function with argument. give time 1seconds to wait call the function.

step 5: print Done.

step 6: stop.

### Pseudocode :
```
"use strict";
FUNCTION task(message) 
    PRINT (message);'
ENDFUNCTION task    
PRINT('Start');

setTimeout(() => THEN
    task('Process');
END, 1000);

PRINT ('Done');
```
## 9. Create a custom event listener and explain?
### Algorithm :
step 1: initialize strict mode in globally.

step 2: initialize event object to startEvent variable.

step 3: create function inside eventlistener. and function definition print the hello world and event .

step 4: dispatchEvent.

step 5: stop.

### Pseudocode :
```
"use strict";
INIT startEvent = new Event("start");
document.addEventListener("start",FUNCTION(event)
    PRINT ("hello world");
    PRINT (event);
    ENDFUNCTION,false);
document.dispatchEvent(startEvent);
```
## 10. Explain the ‘super’ and ‘constructor’ keywords inside the Class with an example?
**super**
### Algorithm :

step 1: initialize strict mode in globally.

step 2: create class with name of Car.

step 3: create constructor function with parameter brand and assign brand to this.carname.

step 4: create show1 function and return this.carname.

step 5: create class model extend from car class.

step 6: create constructor function with parameter brand and model.

step 7: get brand value from car using super keyword.

step 8: assign model to this.model

step 9: create show2 function return show1 function and this.model.

step 10: create object for model class using new keyword and pass argument value to constructor function.

step 11: call show2 function using object.

step 12: stop.
### Pseudocode
```
"use strict";
CLASS Car 
    constructor(brand) 
      this.carname = brand;
    ENDFUNCTION
    show1() 
      RETURN 'I have a ' + this.carname;
    ENDFUNCTION
ENDCLASS
CLASS Model EXTENDS Car 
    constructor(brand, mod) 
      super(brand);
      this.model = mod;
    ENDFUNCTION
    show2() 
      RETURN super.show1() + ', it is ' + this.model;
    ENDFUNCTION
ENDCLASS    
INIT mycar = new Model("Audi", "A6");
mycar.show2();
```
**constructor**
### Algorithm :
step 1: initialize strict mode in globally.

step 2: create class with name of Car.

step 3: create constructor with brand parameter and assign brand to this.carname.

step 4: create function definition show() and return carname.

step 5: create object for Car class using new keyword and pass argument value to constructor function.

step 6: call show function using object.

step 7: stop.

### Pseudocode
```
"use strict";
CLASS Car 
    constructor(brand) 
      this.carname = brand;
    ENDFUNCTION
    show()
        RETURN 'I have a ' + this.carname;
    ENDFUNCTION
ENDCLASS
INIT mycar = new Car("BMW");
PRINT (mycar.show());
```


