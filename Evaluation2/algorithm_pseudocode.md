## 1. Display prime numbers 1 to 200?
### Algorithm:

step 1: initialize strict mode in globally and variable start and end with input value, create two variable to store typeof input and convert input number to string and assign variable.

step 2:check type of input equal to number and input is not a float value.if it true then go to step 10.else go to step 11.

step 3: create a function definition for prime with parameter s and e.

step 4: create a for loop and assign `s` to number variable,loop execute until number equal to `e`.

step 5: inside the loop assign flag = true.go to next step.

step 6: check if number equal to 1 then flag = false.else go to next step.

step 7: create for loop initialize variable i = 2 .Repeat the steps until i < number. go to next step.

step 8: If remainder of number divide `i` equals to 0,then flag equal to false. and break the loop.go to next step.

step 9: if flag equal to true print number.else continue the loop.

step 10: call the prime function with parameter start and end.display the prime number start to end are:.

step 11: display this is not number.go to step 12.

step 12: stop
### Pseudocode:
```
INIT "use strict";
start = INPUT;
end = INPUT;
SET start_type = typeof start;
SET end_type = typeof end;
SET startConvertToString = start + "";
SET endConvertToString = end + "";
IF (start_type === "number" AND startConvertToString.indexOf(".") === -1 AND end_type === "number" AND endConvertToString.indexOf(".") === -1 ) THEN
    PRINT  "prime number "+start+" to " +end+ " are : "
    isprime(start,end);
ELSE
    PRINT "this is not number";
ENDIF

FUNCTION isprime( s, e)
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
ENDFUNCTION isprime                    
```
## 2. From two sorted arrays, how would you find the common numbers?
### Algorithm:

step 1: initialize strict mode in globally and variable array1 and array2 with input array value;

step 2: create a function definition for commonNumber.

step 3: initialize the empty array with variablename of common.

step 4: create for loop and initialize variable i equal to 0.loop execute until i < array1.length.go to next step.

step 5: create for loop and initialize variable j equal to 0.loop execute until j < array2.length.go to next step.

step 6: check the array1 value equal to array 2.if it is true then push the array1 value to common variable.execute until to loop condition false.once false go to step 7.

step 7: print common variable.

step 8: stop.

### Pseudocode:
```
INIT "use strict";
array1=INPUT
array2=INPUT
commonNumber(array1, array2); 

FUNCTION commonNumber(array1, array2) 
    common = []; 
    FOR (i -> 0 to array1.length-1) 
      FOR (j -> 0 to array2.length-1)
        IF (array1[i] == array2[j]) THEN
          common.push(array1[i]);
        ENDIF
      ENDFOR
    ENDFOR       
    PRINT (common);
FUNCTIONEND commonNumber
```
## 3. Explain about function Anatomy, Anonymous function and Assigning function to a variable with an example?
### Function Anatomy
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
INIT total=0;    
sum(10);
FUNCTION sum(x,y=20)
    total=x+y;
    PRINT (total);
ENDFUNCTION sum
```
### Anonymous function
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
INIT total=0;    
SET sum = FUNCTION(x,y)
    total=x+y;
    PRINT (total);
ENDFUNCTION sum
sum (10,20);
```
### Assigning function to a variable
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
INIT total=0;    
SET multiply = FUNCTION(x,y)
    total=x+y;
    PRINT (total);
ENDFUNCTION multiply
multiply (10,20);
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
myfunction(array);     
FUNCTION myfunction(func)
    (typeof func == "function") ? console.log(func()); : console.log("This is not function");     
ENDFUNCTION myfunction
```
## 5. Explain `this` keyword with an example?
### Algorithm:
### Pseudocode:
```
```
## 6. How ‘this’ inside the function and class?
### Algorithm:
### Pseudocode:
```
```
## 7. Difference between map, reduce and filter methods? With an example
### map
### Algorithm:
step 1: initialize strict mode in globally and array with input value stored variable persons.

step 2: using map method perform multiply and stored in Age variable.

step 3: print the Age.

step 4: stop.
### Pseudocode:
```
INIT "use strict";
persons = INPUT
SET Age = persons.map(person => person*10);
PRINT (fullAge);
```
### reduce
### Algorithm:
step 1: initialize strict mode in globally and array with input value stored variable persons.

step 2: using reduce method perform add the all persons age and stored in Age variable.

step 3: print the Age.

step 4: stop.
### Pseudocode:
```
INIT "use strict";
persons = INPUT
SET Age = persons.reduce((person,next) => person+next);
PRINT (Age);
```
### filter
### Algorithm:
step 1: initialize strict mode in globally and array with input value stored variable persons.

step 2: using filter method check whether person age is greater than 18 or not and stored in Age variable.

step 3: print the Age.

step 4: stop.
### Pseudocode:
```
INIT "use strict";
persons = INPUT
SET fullAge = persons.filter(person => person >= 18);
PRINT (Age);
```
## 8. Count Total number of zeros from 1 up to 50
### Algorithm:

step 1: initialize strict mode in globally and variable start and end with input value.

step 2: create function definition for zerocounter with parameter`s` and `e`.

step 3: initialize variable count=0.

step 4: forloop initialize variable i=s to e.

step 5: increment count value.when for condition fails.go to next step.

step 6: print count.

step 7: stop.
### Pseudocode:
```
INIT "use strict";
start = INPUT
end = INPUT
zerocounter(start,end);
FUNCTION zerocounter(s,e)
    INIT count=0;
    FOR (i -> s to e )
        ind=i+"";
        IF (ind.indexOf("0")===1) THEN
          INCREMENT count
        ENDIF
    PRINT (count);
    ENDFOR
ENDFUNCTION  zerocounter 
```
## 9. The following array of numbers show the missing number? ([1,2,3,5,6])
### Algorithm:
### Pseudocode:
```

```
## 10. Write a program for calculating age using Date of birth? (1990)
### Algorithm:
step 1: initialize strict mode in globally and variable birth_year with input value.

step 2: assign date object to year variable.

step 3: assign year.getFullYear to current_year variable.

step 4: subtract the current year and birth year and store in age variable.

step 5: print age.

step 6: stop.

### Pseudocode:
```
INIT "use strict";
birth_year = INPUT
SET year = new Date();
SET current_year = year.getFullYear();
age = current_year - birth_year;
PRINT (age);
```
## 11. In the Javascript function, what are the differences between call by value and reference?
**### call By value**
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
**### call By reference**

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
### Pseudocode:
```
```
## 13. What is Currying in Javascript? Explain with a real time example.
## 14. What is ES6?
### Algorithm:
### Pseudocode:
```
```
## 15. What is an anonymous function? Where do we use it? Why do we need it?
### Algorithm:
### Pseudocode:
```
```
## 16. List the differences between named function and assigning functions to variable with examples
### Algorithm:
### Pseudocode:
```
```

    





    



