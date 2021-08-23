## 1. Check prime number?
### algorithm:
step 1: initialize variable number with value and flag = true

step 2: check the condition number equal to 1 .

step 3: if it is number equal to 1 then print it is prime number go to step 9.if it is not equal to 1 go to next step.

step 4: check the condition number less than 1 .

step 5: if it is number less than 1 then print this value not accept and go to step 9.if it is not less than 1 go to next step.

step 6: check the condition number greater than 1.if it is true go to next step 7.

step 7: inside for loop initialize variable i with 1 .Repeat the steps until i < number

step 7.1: If remainder of number divide i equals to 0,then flag equal to false. and break the loop.

step 8: if flag equal to true print it is prime number.else print
it is not prime number.

step 9:stop

### pseudocode:
```
INPUT number,flag=true;
IF number === 1
   PRINT "prime"
ELSE IF  number < 1
   PRINT "Zero and Negative value is not accept"
ELSE
 FOR (let i=0;i<number;i++)
   IF (number % i == 0) 
        flag = false;
          break;
IF (flag)
    PRINT "prime"
ELSE
    PRINT "Not prime"
```
## 3.How would you reverse a string in JavaScript?
### alogorithm:

step 1: initialize variable string with value.

step 2: create a reverse function definition.

step 3: initialize variable reversedString with value.

step 4: inside for loop initialize variable i with string length-1.Repeat the steps until i>=0.

step 4.1: add string value to  reversedString variable.

step 5: return the revesedstring. 

step 6: initialize variable result and assign reverse function with parameter. call the function and get returned value.

step 7: print result.

step 8: stop

### pseudocode:
```
   INPUT string="good morning"; 
   result = reverse(string);
   PRINT string
   PRINT result
   FUNCTION reverse(str) 
         reversedString = "";
      FOR( i=str.length-1;i>=0;i--)
         reversedString +=str[i];
      RETURN reversedString;
    END FUNCTION 
```

## 4.How would you reverse words in a sentence?
### algorithm:

step 1: initialize variable string with value.

step 2: create a reverse the sentence function definition.

step 3: initialize variable sentence with value.

step 4: initialize variable wordArray. given sentence splited using split function.go to for loop.

step 4: inside for loop initialize variable i with wordArray. length-1.Repeat the steps until i>=0.

step 4.1: add splited word value to sentence variable.

step 5: return the sentence. 

step 6: initialize variable result and assign reverse the sentence function with parameter. call the function and get returned value.

step 7: print result.

step 8: stop.

### pseudocode:
```
INPUT string="good morning"
result=reverse_sentence(string);
PRINT result

FUNCTION reverse_sentence(str)
    sentence="";
    wordArray=str.split(" ");
   FOR (let i=wordArray.length-1;i>=0;i--)
      sentence += wordArray[i]+" ";
   RETURN sentence;
END FUNCTION
```
## 5. How will you verify a word as a palindrome?
### algorithm:
step 1: initialize variable string with value.

step 2: create a reverse function definition.

step 3: initialize variable arrayString.Given word splited using split function.

step 4: initialize variable reverseArray.splited word reversed using reverse function.

step 4: initialize variable joinArray. reversed word join using join function.

step 5: return the joinArray.

step 6: initialize variable result and assign reverse the string function with parameter. call the function and get returned value and go to next step.

step 7: check original string with reversed string .if the condition is true then print it is palindrome.else go to next step.

step 8: print given string is not palindrome.

step 9: stop.

### pseudocode:
```
INPUT string="malayalam";  
 result = reverseString(string);
IF(result===string)
   PRINT "given string is palindrome"
ELSE
   PRINT "given string is not palindrome" 

FUNCTION reverseString(str) 
      arrayStrings = str.split("");
      reverseArray = arrayStrings.reverse();
      joinArray = reverseArray.join("");
   RETURN joinArray;
END FUNCTION    
```
## 6.Write your own program to explain the difference between forEach and map?
### algorithm
 
step 1: initialize variable month with array value.

step 2: initialize variable allmonth.

step 3: create a function definition for get all month from array.

step 4: added to allmonth variable.

step 5: using foreach loop call the function display months.

step 6:stop

### pseudocode:
**forEach():**
```
INPUT month=["jun","feb","mar","apr"];
allMonths="";

FUNCTION function1(mon)
   allMonths += mon+" ";

month.FOREACH(function1);
PRINT (allMonths) 
```
### algorithm:

step 1: initialize variable number with array value.

step 2: create a function definition for get all number from array.

step 3: multiply with 10 and return the value.

step 4: initialize newArray variable.

step 5: using map call the function and store the value to newArray.

step 6:stop 

**map**
```
INPUT number=[10,20,30,40,50];

FUNCTION function2(val)
   RETURN val*10;

 newArray=number.MAP(function2);
PRINT (newArray)
```
## 9.Write a program to calculate the sum of the first 10 natural numbers.
### algorithm:
step 1: initialize variable sum with zero.

step 2: loop initialize variable i equals to 1.

step 3: Repeat the steps until i <= 10.

step 4: add i value to sum until condition fails.

step 5: print sum 

step 6: stop
### pseudocode:
```
var sum = 0;
for (let i = 1;i <= 10;i++) 
   sum += i;

print (sum)
```
## 10.Write a program to print the sum of the even and odd numbers for a given number?(100)
### algorithm:
step 1: initialize variable odd,even with zero.

step 2: loop initialize variable i equals to 1.Repeat the steps until i <= 100.go to next step.

step 3: check the condition i%2 ==0 .then goto step 4. else go to step 5 

step 4: add i value to even variable.

step 5: add i value to odd variable.

step 6: print even and odd.

step 7: stop.
### pseudocode:
```
 odd=0,even=0;
FOR(let i=1;i<=100;i++)
   IF(i%2==0)
      even +=i;
   ELSE
      odd +=i;
PRINT (even)
PRINT (odd)
```
## 11.Write a program to merge two arrays? ([1,2,9,3,5,1,4,5], [11,54,70,40])
### algorithm:

step 1: initialize variable array1,array2 with array value.

step 2: initialize variable merge.

step 3: using concat method array1 concat with array2.

step 4: store the value in merge variable.

step 5: display merge.

step 6:stop

### pseudocode:
```
  array1=[1,2,9,3,5,1,4,5];
  array2=[11,54,70,40];
  merge=[...array1,...array2];
 PRINT (merge)   
merge=array1.concat(array2);
 PRINT (merge)   
```
## 12. Remove duplicate from an array of an object by id and name? a. [{id: 1, name: ‘Stephen covey’ }, {id: 2, name: ‘Robin Sharma’ }, {id: 3, name:‘Tolstoy’}, {id: 3, name: ‘Tolstoy’}, {id: 5, name: ‘James clear’}]
### algorithm:

step 1: initialize variable array with array value.

step 2: initialize variable x with SET.

step 3: using filter method filter the array.

step 4: remove duplicate value from array of object using set and store value variable.

step 5: return value to function.

step 6: assign the filter method to filterarray variable.

step 7: print filterarray

step 8: stop

### pseudocode:
```
 x = new Set();
INPUT array = [
    {id: 1, name: 'Stephen covey'},
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'}
];
   filteredArray = array.filter(value => {
   duplicate1 = x.has(value.id);
   x.ADD(value.id);
   duplicate2 = x.has(value.name);
   x.ADD(value.name);
  RETURN !duplicate1&&!duplicate2;
});
PRINT (filteredArray)
```
## 13.Compare two objects, If all properties are equal return true or return false?
## a. ({id: 1, name: “edison”}, {id: 1, name: “edison”})
## b. ({id: 1, name: “edison”}, {id: 2, name: “edison”})

### algorithm:

step 1: initialize variable a,b,c,d with object value.

step 2: create a object comparison function definition.

step 3: get property from variable store in A,B variable. 

step 4: check property length of two variable.if it is not equal then return false.else goto next step.

step 5: go loop check the property value.if it is not equal then return false.goto next step 7.

step 6: else repeat until loop condition fails.if loop condition fails.goto next step 7.

step 7: call the object comparison function and print true or false

step 8: stop

### pseudocode:
```
 a={id: 1, name: "edison"},b={id: 1, name: "edison"};
 c={id: 1, name: "edison"}, d={id: 2, name: "edison"};
PRINT (objcmp(a,b))  
PRINT (objcmp(c,d)) 

FUNCTION objcmp(x,y){
     A=Object.getOwnPropertyNames(x);
     B=Object.getOwnPropertyNames(y);
    IF(A.length!=B.length)
      RETURN false;
    FOR( i=0;i<A.length;i++){
          propName=A[i];
         IF(x[propName]!==y[propName])
           RETURN false;
     } 
     RETURN true;
}
```
## 15. Group by the id of the following array of objects using the Array.reduce method? [{id: 1, name: ‘edison’ }, {id: 2, name: ‘Annand’ }, {id: 3, name: ‘Vasnath’}]

### algorithm:

step 1: initialize variable users with array of object value.

step 2: using reduce method group the id and return the variable.

step 3: reduce functio are store in group variable. 

step 4: print the group variable.

step 5: stop

### pseudocode:
```
 users=[
    {id: 1, name: 'edison' }, 
    {id: 2, name: 'Annand' }, 
    {id: 3, name: 'Vasnath'}
];
 groupByid = users.reduce((acc, index) => {
    acc[index.id] = acc[index.id] + 1 || 1;
    RETURN acc;
  }, {});
PRINT (groupByid)
```
## 17. Write a program in Javascript to make such a pattern like right angle triangle with number increased by 1
### algorithm:

step 1: initialize variable value,k =1.

step 2: loop initialize variable i equals to 1.Repeat the steps until i < 5.go to next step.

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
  value = "";
  k=1;
 FOR ( i = 1;i < 5;i++) 
    FOR ( j = 0;j < i;j++) 
       value+=k;
       k++;
       value +=" ";
   value +="\n";

 PRINT (value); 
```
## 18. Write a program in Javascript to make such a pattern like a pyramid with numbers increased by 1
### algorithm:

step 1: initialize variable number,a =1.

step 2: loop initialize variable i equals to 1.Repeat the steps until i < 5.go to next step.

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
   number = "";
   a=1;
  FOR ( i = 1;i<5;i++) {
  FOR ( j = 1;j<= 5 - i;j++){
     number += " ";
  }
  FOR ( k = 0; k < 2*i-i ; k++) {
     number += a;
     a++;
     number += " ";
  }
  number += "\n";
  }
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

step 1: initialize variable string .

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
string = "";
FOR ( i = 1;i<=5;i++) 
  FOR ( j=5;j>i;j--) 
    string += " ";
  FOR ( k=0;k<i*2-1;k++) 
    string += "*";
  string += "\n";
FOR ( i=1;i<=5-1;i++) 
   FOR ( j=0;j<i;j++) 
      string += " ";
   FOR ( k=(5-i)*2-1;k>0;k--) 
      string += "*";
   string += "\n";
PRINT(string);
```