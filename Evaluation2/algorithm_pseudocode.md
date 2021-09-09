## 1. Display prime numbers 1 to 200?
### Algorithm:

step 1: initialize strict mode in globally and variable start and end with input value and convert input number to string and assign to variable.

step 2: check type of input equal to number ,if it is true then go to next step.else go to step 14.
 
step 3: check input is not a float value ,if it is true then go to next step.else go to step 15.

step 4: chec input greater than 1 ,if it is true then go to next step.else go to step 16.

step 5: start less than or equal to end.if it true then go to step 13.else go to step 17.

step 6: create a function definition for prime with parameter `s` and `e`.

step 7: create a for loop and assign `s` to number variable,loop execute until number equal to `e`.

step 8: inside the loop assign flag = true.go to next step.

step 9: check if number equal to 1 then flag = false.else go to next step.

step 10: create for loop initialize variable i = 2 .Repeat the steps until i < number. go to next step.

step 11: If remainder of number divide `i` equals to 0,then flag equal to false. and break the loop.go to next step.

step 12: if flag equal to true print number.else continue the loop.

step 13: call the prime function with parameter start and end.display the prime numbers between start to end are:.finish all step go to step 18.

step 14: display The string input value not acctepted.go to step 18.

step 15: display The float input value not acctepted.go to step 18.

step 16: display The negative input value not acctepted.go to step 18.

step 17: display The input value range not acctepted.go to step 18.

step 18: stop
### Pseudocode:
```
INIT "use strict";
start = INPUT;
end = INPUT;
SET startConvertToString = start + "";
SET endConvertToString = end + "";
FUNCTION listOfPrimeNumber( s, e)
    FOR( number -> s to e ) 
        INIT flag=true; 
        IF( number === 1 ) THEN
            flag = false;
        ELSE 
            FOR ( i -> 2 to number-1)
                IF (number % i == 0) THEN
                    flag = false;
                    BREAK;
                ENDIF
            ENDFOR
        ENDIF 
        IF (flag) THEN
           PRINT (number); 
        ENDIF   
ENDFUNCTION listOfPrimeNumber                    
IF(typeof start === "number" && typeof end === "number") THEN
    IF(startConvertToString.indexOf(".") === -1 && endConvertToString.indexOf(".") === -1) THEN
        IF( start > 0 && end > 0 ) THEN
            IF(start <= end) THEN
               PRINT ("Prime numbers between "+ start + " to " + end + " are : ");
               listOfPrimeNumber(start,end);
            ELSE
                PRINT ("The input value range not acctepted");
            ENDIF 
        ELSE
            PRINT ("The negative input value not acctepted");
        ENDIF
    ELSE
        PRINT("The float input value not acctepted");
    ENDIF
ELSE
    PRINT ("The string input value not acctepted");
ENDIF
```
## 2. From two sorted arrays, how would you find the common numbers?
### Algorithm:

step 1: initialize strict mode in globally and variable array1 and array2 with input array value;

step 2: create a function definition for commonNumber.

step 3: initialize the empty array with variablename of common.

step 4: create for loop and initialize variable i equal to 0. loop execute until i < array1.length. go to next step.

step 5: create for loop and initialize variable j equal to 0. loop execute until j < array2.length. go to next step.

step 6: check the array1 value equal to array 2. if it is true then push the array1 value to common variable. execute until to loop condition false. once false go to step 7.

step 7: print common variable.

step 8: call the function with parameter value.go to step 3.

step 9: stop.

### Pseudocode:
```
INIT "use strict";
array1 = INPUT
array2 = INPUT
FUNCTION commonNumber (array1, array2) 
    SET common = []; 
    FOR (i -> 0 to array1.length-1) 
      FOR (j -> 0 to array2.length-1)
        IF (array1[i] === array2[j]) THEN
          common.push(array1[i]);
        ENDIF
      ENDFOR
    ENDFOR       
    PRINT (common);
FUNCTIONEND commonNumber
commonNumber (array1, array2); 
```
## 3. Explain about function Anatomy, Anonymous function and Assigning function to a variable with an example?
### **Function Anatomy**
### Algorithm:
step 1: initialize strict mode in globally and variable total = 0.

step 2: create a function definition for sum with parameter `x` and `y`with value.

step 3: add the `x` and `y` value and store total variable.

step 4: print total.

step 5: call the sum function with value.

step 6: stop.

### Pseudocode:
```
INIT "use strict";
INIT total = 0;    
FUNCTION sum( x, y = INPUT)
    CALCULATE total = x + y ;
    PRINT (total);
ENDFUNCTION sum
sum (INPUT);
```
### **Anonymous function**
### Algorithm:
step 1: initialize strict mode in globally and variable total = 0.

step 2: create a function definition for sum with parameter `x` and `y`.

step 3: add the `x` and `y` value and store total variable.

step 4: print total.

step 5: call the sum function with value.

step 6: stop.

### Pseudocode:
```
INIT "use strict";
INIT total = 0;    
FUNCTION(x,y)
    CALCULATE total = x + y ;
    PRINT (total);
ENDFUNCTION sum
(INPUT, INPUT);
```
### **Assigning function to a variable**
### Algorithm:
step 1: initialize strict mode in globally and variable total = 0.

step 2: create a function definition for multiply with parameter `x` and `y` and store in multiply variable.

step 3: add the `x` and `y` value and store total variable.

step 4: print total.

step 5: call the multiply function with value.

step 6: stop.

### Pseudocode:
```
INIT "use strict";
INIT total = 0;    
SET multiply = FUNCTION( x, y)
    CALCULATE total = x + y ;
    PRINT (total);
ENDFUNCTION multiply
multiply (INPUT, INPUT);
```
## 4. Show an example ofSafegrounding function parameters?

### Algorithm:

step 1: initialize strict mode in globally and empty array stored variable array,function stored in variable Function.

step 2: create function definition with parameter.

step 3: check the type of parameter value.if it is function then execute that function .else go to next step.

step 4: print this ia not function message.

step 5: stop.

### Pseudocode:
```
INIT "use strict";
array = INPUT
Function = INPUT
myFunction(array);     
FUNCTION myFunction(func)
    (typeof func == "function") ? console.log(func()); : console.log("This is not function");     
ENDFUNCTION myFunction
```
## 5. Explain `this` keyword with an example?
### Algorithm:
step 1: initialize strict mode in globally.

step 2: intialize obj variable and assign  id,name and function property with value to obj variable.go to next step. 

step 3: call the function use obj variable.

step 4: using this keyword function property display id.

stop 5: stop.

### Pseudocode:
```
INIT "use strict";
SET obj={
    id:INPUT,
    name:INPUT,
    f:function()
        PRINT (this.id);
    ENDFUNCTION
};
obj.f();
```
## 6. How ‘this’ inside the function and class?

### **‘this’ inside the function**

### Algorithm:
step 1: initialize strict mode in globally.

step 2: create function definition for return `this` and assign function to exampleFunction variable.

step 3: initialize obj varaible and assign exampleFunction function with new keyword.

step 4: print the obj variable.

step 5: stop.

### Pseudocode:
```
INIT "use strict";
SET exampleFunction = FUNCTION () 
        RETURN this;
    ENDFUNCTION
SET obj = new exampleFunction();
PRINT(obj);
```
### **‘this’ inside the class**
### Algorithm:
step 1: initialize strict mode in globally.

step 2: create class and constructor for return `this` and assign function to exampleClass variable.

step 3: initialize obj varaible and assign exampleClass class with new keyword.

step 4: print the obj variable.

step 5: stop.

### Pseudocode:
```
INIT "use strict";
SET exampleClass = CLASS THEN
    CONSTRUCTOR()  
        RETURN this;
    ENDCONSTRUCTOR
ENDCLASS   
SET obj = new exampleClass();
PRINT (obj);
```
## 7. Difference between map, reduce and filter methods? With an example
### **map**
### Algorithm:
step 1: initialize strict mode in globally and array with input value stored variable personsAge.

step 2: using map method perform multiply and stored in ResultAge variable.

step 3: print the ResultAge.

step 4: stop.
### Pseudocode:
```
INIT "use strict";
personsAge = INPUT
SET ResultAge = personsAge.map(age => age * 10);
PRINT (ResultAge);
```
### **reduce**
### Algorithm:
step 1: initialize strict mode in globally and array with input value stored variable personsAge.

step 2: using reduce method perform add the all persons age and stored in ResultAge variable.

step 3: print the ResultAge.

step 4: stop.
### Pseudocode:
```
INIT "use strict";
personsAge = INPUT
SET ResultAge = personsAge.reduce((age,next) => age + next);
PRINT (ResultAge);
```
### **filter**
### Algorithm:
step 1: initialize strict mode in globally and array with input value stored variable personsAge.

step 2: using filter method check whether person age is greater than 18 or not and stored in ResultAge variable.

step 3: print the ResultAge.

step 4: stop.
### Pseudocode:
```
INIT "use strict";
personsAge = INPUT
SET ResultAge = personsAge.filter(age => age >= 18);
PRINT (ResultAge);
```
## 8. Count Total number of zeros from 1 up to 50
### Algorithm:

step 1: initialize strict mode in globally and variable start and end with input value, create two variable to store typeof input and convert input number to string and assign variable.

step 2: check type of input equal to number.if it true go to next step.else goto step 9. input is not a float value. if it true then go to next step. else go to step 8.

step 3: initialize variable count = 0.

step 4: forloop initialize variable i=start to end.

step 5: initialize variable numberTOString and convert `i` to string.

step 6: using split method split the value of numberToString and if 0 is present then assign corresponted value to count.

step 7: print count.

step 8: display the float value not accepted.go to step 10.

step 9: display the string value not accepted.go to step 10.

step 10: stop.
### Pseudocode:
```
INIT "use strict";
start = INPUT
end = INPUT
SET start_type = TYPEOF start;
SET end_type = TYPEOF end;
SET startConvertToString = start + "" ;
SET endConvertToString = end + "" ;
IF (start_type === "number" AND end_type === "number") THEN
    IF(startConvertToString.indexOf(".") === -1 AND endConvertToString.indexOf(".") === -1) THEN
        SET count = 0;
        FOR (i -> start to end )
            SET numberToString = i + "" ;
            CALCULATE count += numberToString.split("0").length - 1;
        ENDFOR
        PRINT (count);
    ELSE
       PRINT ("This float value not accepted");
    ENDIF  
ELSE
    PRINT ("This string value not accepted");
ENDIF
```
## 9. The following array of numbers show the missing number? ([1,2,3,5,6])
### Algorithm:
step 1: initialize strict mode in globally and variable array with input values.

step 2: find the maximum value of array and store the maximum value in max variable.

step 3: initialize missing variable with empty array.

step 4: create for loop and initialize i equal to 1 and execute until i <= max.go to next step.

step 5: check if the i present inside of array or not.if it is not present then push  i value to array.else go to next step.

step 6: execute until for condition fails.if for condition fails then go to next step.else go to step 4.

step 7: print missing variable.

step 8: stop.

### Pseudocode:
```
INIT "use strict";
array = INPUT
SET max = Math.max(...array); 
INIT missing = [];
FOR ( i -> 1 to max ) 
  IF (array.indexOf(i) == -1) 
     missing.push(i);
  ENDIF
ENDFOR
PRINT (missing);
```
## 10. Write a program for calculating age using Date of birth? (1990)
### Algorithm:
step 1: initialize strict mode in globally and variable birth_year with input value.
 
step 2: check the input value type and store type variable.convert the input value to string and store convertToString variable.

step 3: check if type of input equal to number if it true go to next step.else go to step 12.

step 4: check if type of input equal to float if it true go to step.else go to next step 11.

step 5: check input greater than 0 if it true go to next step.else go to step 10.

step 6: assign date object to year variable.

step 7: assign year.getFullYear to current_year variable.

step 8: subtract the current year and birth year and store in age variable.

step 9: print age.

step 10: display the negative value not accepted.go to step 13.

step 11: display the float value not accepted.go to step 13.

step 12: display the string value not accepted.go to step 13.

step 13: stop.

### Pseudocode:
```
INIT "use strict";
birth_year = INPUT
type = typeof birth_year;
convertToString = birth_year + "" ;
IF(type === "number") THEN
    IF(convertToString.indexOf(".") === -1 )THEN
        IF(birth_year > 0) THEN
            SET year = new Date();
            SET current_year = year.getFullYear();
            CALCULATE age = current_year - birth_year;
            PRINT (age);
        ELSE
            PRINT ("The negative value not accepted");
        ENDIF
    ELSE
        PRINT ("The float value not accepted");
    ENDIF
ELSE
    PRINT ("The string value not accepted");
ENDIF
```
## 11. In the Javascript function, what are the differences between call by value and reference?
### **call By value**
### Algorithm:
step 1: initialize strict mode in globally and variable `a` with input value.

step 2: initialize `b` variable assig `a` to `b`.

step 3: initialize `c` variable assig `b` to `c`.

step 4: change the input value of `a`.

step 5: print `a`, `b` and `c`;

step 6: stop.

### Pseudocode:
```
INIT "use strict";
a = INPUT
SET b = a;
SET c = b;
SET a = INPUT
PRINT (a);      
PRINT (b);     
PRINT (c);     
```
### **call By reference**

### Algorithm:
step 1: initialize strict mode in globally and variable `x` with input value.

step 2: initialize `y` variable assig `x` to `y`.

step 3: initialize `z` variable assig `y` to `z`.

step 4: change the input value of `x`.

step 5: print `x`, `y` and `z`;

step 6: stop.

### Pseudocode:
```
INIT "use strict";
x = INPUT
SET y = x;
SET z = y;
SET x = INPUT
PRINT (x);      
PRINT (y);     
PRINT (z);  
```

## 12. What is Arity in Javascript? Explain with a real time example.
### Algorithm:
step 1: initialize strict mode in globally.

step 2: create a function definition with name of date.function have day,month and year parameter.

step 3: initialize the arity variable and assign date.length to arity variable.

step 4: print arity.

step 5: stop.
### Pseudocode:
```
INIT "use strict";
FUNCTION date( day, month, year){
}
ENDFUNCTION date
SET arity = date.length
PRINT (arity)
```
## 13. What is Currying in Javascript? Explain with a real time example.
### Algorithm:
step 1: initialize strict mode in globally.

step 2: create nameless funtion with parameter `length` and assign to volume variable.go to next step. 

step 3: function return another function with parameter `width`.go to next step.

step 4: above function return another function with parameter `height`.go to next step.

step 5: the above function return height * width * length.

step 6: call the volume function with parameter value and print volume of given value. 

step 7: stop.
### Pseudocode:
```
INIT "use strict";
SET volume = FUNCTION (length)
    RETURN FUNCTION (width) 
       RETURN FUNCTION (height)
          RETURN height * width * length;
       ENDFUNCTION
    ENDFUNCTION   
ENDFUNCTION    
PRINT (volume (INPUT)(INPUT)(INPUT));
```
## 14. What is ES6?
## 15. What is an anonymous function? Where do we use it? Why do we need it?
### Algorithm:
step 1: initialize strict mode in globally and variable total = 0.

step 2: create a function definition for multiplication with parameter `x` and `y`.

step 3: multiply the `x` and `y` value and store total variable.

step 4: print total.

step 5: call the multiply function with value.

step 6: stop.

### Pseudocode:
```
INIT "use strict";
INIT total = 0;    
FUNCTION( x, y ss)
    CALCULATE total = x * y ;
    PRINT (total);
ENDFUNCTION multiply
(INPUT,INPUT);
```
## 16. List the differences between named function and assigning functions to variable with examples
### **named function**
### Algorithm:
step 1: initialize strict mode in globally and variable total = 0.

step 2: create a function definition for sum with parameter `x` and `y` and store in sum variable.

step 3: add the `x` and `y` value and store total variable.

step 4: print total.

step 5: call the sum function with value.

step 6: stop.

### Pseudocode:
```
INIT "use strict";
INIT total = 0;    
FUNCTION sum( x, y)
    CALCULATE total = x + y ;
    PRINT (total);
ENDFUNCTION sum
sum (INPUT,INPUT);
```
### **assigning functions to variable**
### Algorithm:
step 1: initialize strict mode in globally and variable total = 0.

step 2: create a function definition for multiplication with parameter `x` and `y` and store in multiply variable.

step 3: multiply the `x` and `y` value and store total variable.

step 4: print total.

step 5: call the multiply function with value.

step 6: stop.

### Pseudocode:
```
INIT "use strict";
INIT total = 0;    
SET multiply = FUNCTION( x, y)
    CALCULATE total = x * y ;
    PRINT (total);
ENDFUNCTION multiply
multiply (INPUT,INPUT);
```

    





    



