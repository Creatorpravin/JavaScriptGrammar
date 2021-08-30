## 1. Check prime number?
### algorithm:
step 1: initialize strict mode in globally and variable number with input value and type with typeof input and flag = true, convert number to string and assign one variable.

step 2:check type of input equal to number and number is not a float value.if it true then go to step 3.else go to step 10

step 3: check the condition number equal to 2 .

step 4: if it is number equal to 2 then print it is prime number go to step 11.if it is not equal to 2 go to next step.

step 5: check the condition number less than 2 .

step 6: if it is number less than 2 then print this value not accept and go to step 11.if it is not less than 2 go to next step.

step 7: check the condition number greater than 2.if it is true go to next step 8.

step 8: inside for loop initialize variable i with 2 .Repeat the steps until i < number

step 8.1: If remainder of number divide i equals to 0,then flag equal to false. and break the loop.go to step 9.

step 9: if flag equal to true print it is prime number.else print it is not prime number.

step 10: display this is not number.go to step 11.

step 11: stop

### pseudocode:
```
INIT "use strict";
number=INPUT
INIT flag=true;
SET type=TYPEOF number;
INIT convertToString=number+"";
IF(type==="number"&&convertToString.indexOf(".")===-1) THEN
   IF (number === 2) THEN
      PRINT "prime"
   ELSE IF  (number < 2) THEN
      PRINT "Zero and Negative value is not accept"
   ELSE 
     FOR (i->2 to number-1)
        IF (number % i == 0) THEN
         SET flag = false;
            BREAK;
        ENDIF    
     ENDFOR       
   PRINT (flag)?number+" is prime":number+" is not prime");
   ENDIF  
ELSE
    PRINT "this is not number" 
ENDIF         
```
## 3.How would you reverse a string in JavaScript?
### alogorithm:

step 1: initialize strict mode in globally and variable string with input value and type with typeof input.

step 2:check type of input equal to string.if it true then go to step 7.else go to step 9.

step 3: create a reverse function definition.

step 4: initialize variable reversedString with value.

step 5: inside for loop initialize variable i with string length-1.Repeat the steps until i>=0.

step 5.1: add string value to  reversedString variable.

step 6: return the revesedstring. 

step 7: initialize variable result and assign reverse function with parameter. call the function and get returned value.go to next step.

step 8: print result.go to step 10.

step 9:display this is not string.go to step 10.

step 10: stop.

### pseudocode:
```
   INIT "use strict";
   string=INPUT
   SET type=TYPEOF string;
   IF(type==="string") THEN
      SET result = reverse(string);
      PRINT string
      PRINT result
   ELSE
      PRINT "this is not string" 
   ENDIF 
   FUNCTION reverse(str) 
        INIT reversedString = "";
      FOR( i -> str.length-1 to 0)
         reversedString +=str[i];
      ENDFOR   
      RETURN reversedString;
   ENDFUNCTION  reverse
```

## 4.How would you reverse words in a sentence?
### algorithm:

step 1: initialize strict mode in globally and variable string with input value and type with typeof input.

step 2: check type of input equal to string.if it true then go to step 8.else go to step 10.

step 3: create a reverse the sentence function definition.

step 4: initialize variable sentence with value.

step 5: initialize variable wordArray. given sentence splited using split function.go to for loop.

step 6: inside for loop initialize variable i with wordArray. length-1.Repeat the steps until i>=0.

step 6.1: add splited word value to sentence variable.

step 7: return the sentence. 

step 8: initialize variable result and assign reverse the sentence function with parameter. call the function and get returned value.go to step 9.

step 9: print result.go to step 11.

step 10:display this is not string.go to step 11.

step 11: stop.

### pseudocode:
```
INIT "use strict";
   string=INPUT
   SET type=TYPEOF string;
   IF(type==="string") THEN
      SET result = reverse_sentence(string);
      PRINT string
      PRINT result
   ELSE
      PRINT "this is not string" 
   ENDIF 

FUNCTION reverse_sentence(str)
    INIT sentence="";
    SET wordArray=str.split(" ");
   FOR (i->wordArray.length-1 to 0)
      sentence += wordArray[i]+" ";
   ENDFOR   
   RETURN sentence;
ENDFUNCTION reverse_sentence
```
## 5. How will you verify a word as a palindrome?
### algorithm:
step 1: initialize strict mode in globally and  variable string with value and type with typeof input ,use lowercase in method to input string.

step 2: check type of input equal to string.if it true then go to step 8.else go to step 11.

step 3: create a reverse function definition.

step 4: initialize variable arrayString.Given word splited using split function.

step 5: initialize variable reverseArray.splited word reversed using reverse function.

step 6: initialize variable joinArray. reversed word join using join function.

step 7: return the joinArray.

step 8: initialize variable result and assign reverse the string function with parameter. call the function and get returned value and go to next step.

step 9: check original string with reversed string .if the condition is true then print it is palindrome.else go to next step.

step 10: print given string is not palindrome.

step 11:display this is not string.go to step 12.

step 12: stop.

### pseudocode:
```
INIT "use strict";
string=INPUT

SET type=TYPEOF string;
IF(type==="string") THEN 
   SET result = reverseString(string);
   PRINT (result===string)?"given string is palindrome":"given string is not palindrome"; 
ELSE
   PRINT "this is not string" 
ENDIF
   
FUNCTION reverseString(str) 
      SET arrayStrings = str.split("");
      SET reverseArray = arrayStrings.reverse();
      SET joinArray = reverseArray.join("");
   RETURN joinArray;
ENDFUNCTION  reverseString   
```
## 6.Write your own program to explain the difference between forEach and map?
### algorithm
 
step 1: initialize strict mode in globally and  variable month with array value.

step 2: initialize variable allmonth.

step 3: create a function definition for get all month from array.

step 4: added to allmonth variable.

step 5: using foreach loop call the function display months.

step 6:stop

### pseudocode:
**forEach():**
```
INIT "use strict";
month=INPUT
SET allMonths="";
month.FOREACH(function1);
FUNCTION function1(mon)
   allMonths += mon+" ";
ENDFUNCTION function1
PRINT (allMonths) 
```
### algorithm:

step 1: initialize strict mode in globally and  variable number with array value.

step 2: create a function definition for get all number from array.

step 3: multiply with 10 and return the value.

step 4: initialize newArray variable.

step 5: using map method call the function and store the value to newArray.

step 6: display newarray value.

step 7:stop 
### pseudocode:
**map**
```
INIT "use strict";
number=INPUT
SET newArray=number.MAP(function2);
FUNCTION function2(val)
   RETURN val*10;
ENDFUNCTION function2
 
PRINT (newArray)
```
## 7.Generate a random number between 1 to 5
### algorithm:
step 1: initialize strict mode in globally and  variable random with math.floor(math.random) function.

step 2: print random value

step 3: stop.

### pseudocode:
```
INIT "use strict";
SET random=Math.floor(Math.random() * 5)+1;
PRINT (random);
```
## 8.Remove duplicate from the following array?
### algorithm:
step 1: initialize strict mode in globally and  variable a with input array value.

step 2: initalize another one variable A with assign array inside Set(a) object using new key.

step 3: print A value.

step 4: stop.

### pseudocode:
```
INIT "use strict";
a=INPUT
INIT A=[...new Set(a)];
PRINT (A);
```
## 9.Write a program to calculate the sum of the first 10 natural numbers.
### algorithm:
step 1: initialize strict mode in globally and  variable sum with zero.

step 2: loop initialize variable i equals to 1.

step 3: Repeat the steps until i <= 10.

step 4: add i value to sum until condition fails.if condition fails go to next step.

step 5: print sum 

step 6: stop
### pseudocode:
```
INIT "use strict";
INIT sum = 0;
FOR (i -> 1 to 10) 
   sum += i;
ENDFOR
PRINT (sum)
```
## 10.Write a program to print the sum of the even and odd numbers for a given number?(100)
### algorithm:
step 1: initialize strict mode in globally and  variable odd,even with zero.

step 2: loop initialize variable i equals to 1.Repeat the steps until i <= 100.go to next step.when condition fails go to step 6.

step 3: check the condition i%2 ==0 .then goto step 4. else go to step 5 

step 4: add i value to even variable.

step 5: add i value to odd variable.

step 6: print even and odd.

step 7: stop.
### pseudocode:
```
INIT "use strict"; 
SET odd=0,
SET even=0;
FOR(i->1 to 100)
   (i%2==0)?even +=i:odd +=i;
ENDFOR   
PRINT (even)
PRINT (odd)
```
## 11.Write a program to merge two arrays? ([1,2,9,3,5,1,4,5], [11,54,70,40])
### algorithm:

step 1: initialize strict mode in globally and  variable array1,array2 with input array value.

step 2: initialize variable merge.

step 3: using concat method array1 concat with array2.

step 4: store the value in merge variable.

step 5: display merge.

step 6:stop

### pseudocode:
```
INIT "use strict"; 
array1=INPUT
array2=INPUT   
merge=array1.concat(array2);
PRINT (merge)   
```
## 12. Remove duplicate from an array of an object by id and name? a. [{id: 1, name: ‘Stephen covey’ }, {id: 2, name: ‘Robin Sharma’ }, {id: 3, name:‘Tolstoy’}, {id: 3, name: ‘Tolstoy’}, {id: 5, name: ‘James clear’}]
### algorithm:

step 1: initialize strict mode in globally and  variable array with input array value.

step 2: initialize variable x with SET.

step 3: using filter method filter the array.

step 4: remove duplicate value from array of object using set and store value.

step 5: return value to function.

step 6: assign the filter method to filterarray variable.

step 7: print filterarray

step 8: stop

### pseudocode:
```
INIT "use strict"; 
INIT x = new Set();
array = INPUT
SET filteredArray = array.filter(value => {
      duplicate1 = x.has(value.id);
      x.ADD(value.id);
      duplicate2 = x.has(value.name);
      x.ADD(value.name);
   RETURN !duplicate1&&!duplicate2;
});
ENDFUNCTION
PRINT (filteredArray)
```
## 13.Compare two objects, If all properties are equal return true or return false?
## a. ({id: 1, name: “edison”}, {id: 1, name: “edison”})
## b. ({id: 1, name: “edison”}, {id: 2, name: “edison”})

### algorithm:

step 1: initialize strict mode in globally and  variable a,b,c,d with object value.

step 2: create a object comparison function definition.

step 3: get property from variable store in A,B variable. 

step 4: check property length of two variable.if it is not equal then return false.else goto next step.

step 5: go loop check the property value.if it is not equal then return false. else goto next step.

step 6: repeat until loop condition fails.if loop condition fails.goto step 8.

step 7: call the object comparison function

step 8: print true or false

step 9: stop

### pseudocode:
```
INIT "use strict"; 
a=INPUT
b=INPUT
c=INPUT
d=INPUT
PRINT (objcmp(a,b))  
PRINT (objcmp(c,d)) 

FUNCTION objcmp(x,y)
   SET A=Object.getOwnPropertyNames(x);
   SET B=Object.getOwnPropertyNames(y);
   IF(A.length!=B.length) THEN
      RETURN false;
   ENDIF 
   FOR( i->0 to A.length-1)
      propName=A[i];
      IF(x[propName]!==y[propName]) THEN
         RETURN false;
      ENDIF  
   ENDFOR  
   RETURN true;
ENDFUNCTION objcmp
```
## 14.Take a multidimensional array and flat the array?[1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]]
### algorithm:
step 1: initialize strict mode in globally and  variable arr with array of value.

step 2: using flat method flatten the array.

step 3: print array.

step 4: stop.
### pseudocode:
```
INIT "use strict";
arr=[1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]];
PRINT (arr.flat()); 
```
## 15. Group by the id of the following array of objects using the Array.reduce method? [{id: 1, name: ‘edison’ }, {id: 2, name: ‘Annand’ }, {id: 3, name: ‘Vasnath’}]

### algorithm:

step 1: initialize strict mode in globally and  variable users with array of object value.

step 2: using reduce method group the id and return the variable.go to next step.

step 3: reduce function are store in group variable. 

step 4: print the group variable.

step 5: stop

### pseudocode:
```
INIT "use strict"; 
users=INPUT
SET groupByid = users.reduce((acc, index) => {
     acc[index.id] = acc[index.id] + 1 || 1;
     RETURN acc;
  }, {});
PRINT (groupByid)
```
## 16. Write a program in Javascript to display the pattern like right angle triangle using an asterisk.The pattern like :
  ```
   * 
   ** 
   *** 
   **** 
   *****
  ```
  ### algorithm:

  step 1: initialize strict mode in globally.

  step 2: create a function definition for generator.

  step 3: this function sreturn the * using yield .

  step 4: using for of method assign a generator function to value variable.

  step 5: print value.

  step 6: stop.

  ### pseudocode:
  ```
  INIT "use strict";
   FUNCTION* generator() 
      yield ('*');
      yield ('**');
      yield ('***');
      yield ('****');
      yield ('*****');
   ENDFUNCTION
   FOR(value of generator())
     PRINT (value); 
  ```
 
## 17. Write a program in Javascript to make such a pattern like right angle triangle with number increased by 1
### algorithm:

step 1: initialize strict mode in globally and  variable value,k =1.

step 2: loop initialize variable i equals to 1.Repeat the steps until i < 5.if condition fails go to step 5.else go to next step.

step 3: nested loop initialize variable j equals to 0.Repeat the steps until j < i.go to next step. 

step 4: assign k to value and increment k value by 1.this execute until loops condition fails.

step 5: print the value.

step 6: stop.

### pseudocode:
```
1
2 3
4 5 6
7 8 9 10
```
```
 INIT "use strict"; 
 INIT value = "";
 INIT k=1;
 FOR ( i -> 1 to 4) 
    FOR ( j -> 0 to i) 
       value += k;
       INCREMENT k;
       value +=" ";
     ENDFOR  
   value +="\n";
  ENDFOR 

 PRINT (value); 
```
## 18. Write a program in Javascript to make such a pattern like a pyramid with numbers increased by 1
### algorithm:

step 1: initialize strict mode in globally and  variable number,a =1.

step 2: loop initialize variable i equals to 1.Repeat the steps until i < 5.if condition fails go to step 7.else go to next step.

step 3: nested loop initialize variable j equals to 1.Repeat the steps until j < 5-i.go to next step. 

step 4: assign number to space.goto next step.

step 5: loop initialize variable k equals to 0.Repeat the steps until k<2*i-i.go to next step.

step 6:assign a to number and increment a value by 1.this execute until loops condition fails.

step 7: print number.

step 8: stop.

### pseudocode:
```
     1
    2 3
   4 5 6
  7 8 9 10
```
```
  INIT "use strict";  
  INIT number = "";
  INIT a=1;
  FOR ( i -> 1 to 4) 
      FOR ( j -> 1 to 5 - i)
         number += " ";
      ENDFOR
      FOR ( k -> 0 to (2*i-i)-1 ) 
         number += a;
         INCREMENT a;
         number += " ";
      ENDFOR
     number += "\n";
  ENDFOR
  PRINT (number);
```
### 19. Write a program in Javascript to display the pattern like a diamond
```
         *
        ***
       *****
      *******
     *********
      *******
       *****
        ***
         *
```
### algorithm:

step 1: initialize strict mode in globally and  variable string .

step 2: loop initialize variable i equals to 1.Repeat the steps until i <= 5.go to next step.

step 3: nested loop initialize variable j equals to 5.Repeat the steps until j > i.go to next step. 

step 4: assign number to space.goto next step.

step 5: loop initialize variable k equals to 0.Repeat the steps until k<2*i-1.go to next step.

step 6:assign string to * and newline.this execute until loops condition fails.go to next step.

step 8:reverse the above steps.go to next step.

step 7: print string.

step 8: stop.

### pseudocode:

```
INIT "use strict";  
SET string = "";
FOR ( i -> 1 to 5 ) 
   FOR ( j -> 5 to j>i ) 
      string += " ";
   ENDFOR 
   FOR ( k -> 0 to k<i*2-1 ) 
      string += "*";
   ENDFOR  
  string += "\n";
ENDFOR  
FOR ( i -> 1 to 5-1 ) 
   FOR ( j -> 0 to j<i )  
      string += " ";
   ENDFOR   
   FOR ( k -> (5-i)*2-1 to k>0 ) 
      string += "*";
   ENDFOR   
  string += "\n";
ENDFOR
PRINT(string);
```