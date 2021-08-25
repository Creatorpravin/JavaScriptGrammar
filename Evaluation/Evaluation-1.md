### 1. Check prime number?

  A prime number is a positive integer that is only divisible by 1 and itself.

   ```javascript
   "use strict";
   var number=17;
   var flag=true;
   var type=typeof number;
   // check if type of value is number or not 
   if(type==="number"){
      // check if number is equal to 2
      if(number===2){
         console.log(number+" is prime");
      }
      // check if number is less than 2
      else if(number<2){
         console.log("This value is not accept");
      }    
      // check if number is greater than 2
      else{
         // looping through 2 to number-1
         for (let i = 2; i < number; i++){
            if (number % i == 0) {
               flag = false;
               break;
            }
         } 
         console.log((flag)?number+" is prime":number+" is not prime");  
      }
   }
   else{
      console.log("this is not number");
   }
   ```   
   output:
   ```
   17 is prime
   ```

### 2.What is difference between == and === with an example?
    
   The == is used for comparison between two variables irrespective of the datatype of variable.
   
   The === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values. 

   if you compare a number with a string with numeric literal, == allows that, but === doesn't allow that, because it not only checks the value but also type of two variable, if two variables are not of the same type "===" return false, while "==" return true. 

   example:
   ```javascript
   "use strict";
   console.log(0==false);  //true, because false is equivalent of 0
   console.log(0===false);  //false, because both operands are of different type
   console.log(2=="2");  //true, auto type coercion,string converted into number
   console.log(2==="2");  //false,since both operands are not of same type
   ```     
### 3.How would you reverse a string in JavaScript?
   
   Here,First, the string is split into individual array elements using the split() method. str.split("") gives ["h", "e", "l", "l", "o"].

   The string elements are reversed using the reverse() method. arrayStrings.reverse() gives ["o", "l", "l", "e", "h"].

   The reversed string elements are joined into a single string using the join() method. reverseArray.join("") gives olleh. 

   ```javascript
      "use strict";
      //reverse a string using in-build type
      var string="hello";
      var type=typeof string;
      if(type==="string"){
         var result = reverseString(string);
         console.log(string);
         console.log("string is reversed :"+result);
      }else{
         console.log("this is not string!");
      }
      function reverseString(str) {
         // return a new array of strings
         var arrayStrings = str.split("");
         // reverse the new created array elements
         var reverseArray = arrayStrings.reverse();
         // join all elements of the array into a string
         var joinArray = reverseArray.join("");
         // return the reversed string
         return joinArray;
      }
   ```

   output:
   ```
   hello
   string is reversed :olleh
   ```
another method:

   ```javascript
      "use strict";
      //reverse a string
      string="good morning";
      type=typeof string;
      if(type==="string"){
         result = reverse(string);
         console.log(string);
         console.log("string is reversed :"+result);
      }else{
         console.log("this is not string!");
      }
      function reverse(str) {
         let reversedString="";
         for(let i=str.length-1;i>=0;i--){
            reversedString +=str[i];
         }
         return reversedString;
      }
   ```

   output:
   ```
   good morning
   string is reversed :gninrom doog
   ```

### 4.How would you reverse words in a sentence? 

   Using split and reverse,join function to reverse words in a sentence

   ```javascript
   "use strict";
   //using in-build function
   var str  = "sample string";
   var type=typeof str;
   if(type==="string"){
      console.log("before reverse sentence :"+str);  //before reverse sentence :sample string
      str = str.split(" ");
      str.reverse();
      str = str.join(" ");
      console.log("after reverse sentence :"+str);;       //after reverse sentence :string sample
   }else{
      console.log("this is not string!");
   }
   ```

   Another method to reverse words in a sentence.

   ```javascript
   "use strict";
   //reverse sentence word
   str="good morning";
   type=typeof str;
   if(type==="string"){
   var result=reverse_sentence(str);
   console.log("before reverse sentence :"+str);       //before reverse sentence :good morning
   console.log("after reverse sentence :"+result);;       //after reverse sentence :morning good 
   }else{
      console.log("this is not string!");
   } 
   function reverse_sentence(str){
      var sentence="";
      var wordArray=str.split(" ");
      for(let i=wordArray.length-1;i>=0;i--){
         sentence += wordArray[i]+" ";
      }
      return sentence;
   }
   ```     
### 5.How will you verify a word as a palindrome?

   ```javascript
   "use strict";
   var string="malayalam";
   var type=typeof string;
   if(type==="string"){
      var result = reverseString(string);
      console.log((result==string)?"given string is palindrome":"given string is not palindrome");
   }
   else{
      console.log("this is not string!");
   }
   function reverseString(str) {
      var arrayStrings = str.split("");
      var reverseArray = arrayStrings.reverse();
      var joinArray = reverseArray.join("");
      return joinArray;
   }
   ```

   output:
   ```
   given string is palindrome
   ```

### 6.Write your own program to explain the difference between forEach and map? 
  
  **forEach():**

   The forEach() method calls a function once for each element in an array, in order.

   forEach() is not executed for array elements without values.

   ```javascript
   "use strict";
   //forEach
   var month=["jun","feb","mar","apr"];
   var allMonths="";
   month.forEach(function1);
   function function1(mon){
      allMonths += mon+" ";
   }
   console.log(allMonths);    //jun feb mar apr 
   ```
   output:
   ```
   jun feb mar apr 
   ```
   **map():**

   The map() method creates a new array with the results of calling a function for every array element.

   The map() method calls the provided function once for each element in an array, in order.

   map() does not execute the function for empty elements.

   map() does not change the original array.


   ```javascript
   "use strict";
   //map
   var number=[10,20,30,40,50];
   var newArray=number.map(function2);
   function function2(val){
      return val*10;
   }
   console.log(newArray);    //[100, 200, 300, 400, 500]
   ```
   output:
   ```
   [100, 200, 300, 400, 500]
   ```
### 7.Generate a random number between 1 to 5 

  Math.random() used with Math.floor() can be used to return random integers.

  ```javascript 
  "use strict";
  var random=Math.floor(Math.random() * 5)+1;
  console.log(random);
  ```

  Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive).

  Math.floor() To generate a number that is a whole number rounded down.

### 8.Remove duplicate from the following array?([1,2,9,4,5,8,3,5,1,4,5])

   Remove duplicates from an array using a Set:

   A Set is a collection of unique values. To remove duplicates from an array:

   First, convert an array of duplicates to a Set. The new Set will implicitly remove duplicate elements.

   Then, convert the set back to an array.

   ```javascript
   "use strict";
   var a=[1,2,9,4,5,8,3,5,1,4,5];
   var A=[...new Set(a)];
   console.log(A);   //[1, 2, 9, 4, 5, 8, 3]
   ```
### 9.Write a program to calculate the sum of the first 10 natural numbers.

   ```javascript
   "use strict";
   var sum = 0;
   for (let i = 1;i <= 10;i++) {
      sum += i;
   }
   console.log('The sum of first 10 natural numbers:', sum);   //The sum of first 10 natural numbers: 55
   ```
  output:
  ```
  The sum of first 10 natural numbers: 55
  ```

### 10.Write a program to print the sum of the even and odd numbers for a given number?(100)

   ```javascript
   "use strict";
   var odd=0;
   var even=0;
   for(let i=1;i<=100;i++){
      (i%2==0)?even+=i:odd+=i;
      /*if(i%2==0)
         even +=i;
      else
         odd +=i;*/
   }
   console.log("sum of even:",even);  //sum of even: 2550
   console.log("sum of odd:",odd);    //sum of odd: 2500
   ```
    
   output
   ```
   sum of even: 2550
   sum of odd: 2500
   ```

### 11.Write a program to merge two arrays? ([1,2,9,3,5,1,4,5], [11,54,70,40])

  ```javascript
  "use strict";
  //using spread merge the array
   var array1=[1,2,9,3,5,1,4,5];
   var array2=[11,54,70,40];
   var merge=[...array1,...array2];
   console.log(merge);     //[1, 2, 9, 3, 5, 1, 4, 5, 11, 54, 70, 40]

   //concat method
    array1=[10,20,90,30,5,1,4,5];
    array2=[11,54,70,40];
    merge=array1.concat(array2);
   console.log(merge);    //[10, 20, 90, 30, 5, 1, 4, 5, 11, 54, 70, 40]
  ```   

### 12. Remove duplicate from an array of an object by id and name? a. [{id: 1, name: ‘Stephen covey’ }, {id: 2, name: ‘Robin Sharma’ }, {id: 3, name:‘Tolstoy’}, {id: 3, name: ‘Tolstoy’}, {id: 5, name: ‘James clear’}]   

```javascript
"use strict";
var x = new Set();
var array = [
    {id: 1, name: 'Stephen covey'},
    {id: 2, name: 'Robin Sharma' }, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 3, name: 'Tolstoy'}, 
    {id: 5, name: 'James clear'}
];
var filteredArray = array.filter(value => {
  var duplicate1 = x.has(value.id);
  x.add(value.id);
  var duplicate2 = x.has(value.name);
  x.add(value.name);
  return !duplicate1&&!duplicate2;
});
console.log(filteredArray);
```
output:
```
[{id: 1, name: "Stephen covey"}
{id: 2, name: "Robin Sharma"}
{id: 3, name: "Tolstoy"}
{id: 5, name: "James clear"}]
```

### 13.Compare two objects, If all properties are equal return true or return false?
### a. ({id: 1, name: “edison”}, {id: 1, name: “edison”})
### b. ({id: 1, name: “edison”}, {id: 2, name: “edison”})

```javascript
"use strict";
var a={id: 1, name: "edison"};
var b={id: 1, name: "edison"};
var c={id: 1, name: "edison"};
var d={id: 2, name: "edison"};
console.log(objcmp(a,b));     //true
console.log(objcmp(c,d));     //false

function objcmp(x,y){
    let A=Object.getOwnPropertyNames(x);
    let B=Object.getOwnPropertyNames(y);
    if(A.length!=B.length)
      return false;
    for(let i=0;i<A.length;i++){
         let propName=A[i];
         if(x[propName]!==y[propName])
           return false;
     } 
     return true;
}
```
output
```
true
false
```


### 14.Take a multidimensional array and flat the array?[1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]]

   The flat() method is an inbuilt array method that flattens a given array into a newly created one-dimensional array. It concatenates all the elements of the given multidimensional array, and flats upto the specified depth. We can specify the depth limit to where we need to flatten the array. By default, the depth limit is 1.

   ```javascript
   "use strict";
   var arr=[1,4,2,3,[10,20,20], [100,500,700,600],[2000,1000]];
   //using flat()
   console.log(arr.flat());  //[1, 4, 2, 3, 10, 20, 20, 100, 500, 700, 600, 2000, 1000]
   ```

### 15. Group by the id of the following array of objects using the Array.reduce method? [{id: 1, name: ‘edison’ }, {id: 2, name: ‘Annand’ }, {id: 3, name: ‘Vasnath’}]

```javascript
"use strict";
var users=[
    {id: 1, name: 'edison' }, 
    {id: 2, name: 'Annand' }, 
    {id: 3, name: 'Vasnath'}
];
var groupByid = users.reduce((acc, index) => {
    acc[index.id] = acc[index.id] + 1 || 1;
    return acc;
  }, {});
console.log(groupByid);
```
output:
```
{1: 1, 2: 1, 3: 1}
```
  

### 16. Write a program in Javascript to display the pattern like right angle triangle using an asterisk.The pattern like :
  ```
   * 
   ** 
   *** 
   **** 
   *****
  ```
  ```javascript
  "use strict";
   function* generator() {
      yield ('*');
      yield ('**');
      yield ('***');
      yield ('****');
      yield ('*****');
   }
   for(let value of generator())
     console.log(value); 
  ``` 
  output:
  ```
   * 
   ** 
   *** 
   **** 
   *****
  ```

### 17. Write a program in Javascript to make such a pattern like right angle triangle with number increased by 1 
```
1
2 3
4 5 6
7 8 9 10
```
  ```javascript
  "use strict";
   let value = "";
   let k=1;
   for (let i = 1;i < 5;i++) {
      for (let j = 0;j < i;j++) {
         value+=k;
         k++;
         value +=" ";
      }
     value +="\n";
   }
   console.log(value); 
  ```   
  output:
  ```
   1
   2 3
   4 5 6
   7 8 9 10
   ```

### 18. Write a program in Javascript to make such a pattern like a pyramid with numbers increased by 1
```
     1
    2 3
   4 5 6
  7 8 9 10
```
 ```javascript
  "use strict";
   let number = "";
   let a=1;
   for (let i = 1;i<5;i++) {
   for (let j = 1;j<= 5 - i;j++){
      number += " ";
   }
   for (let k = 0; k < 2*i-i ; k++) {
      number += a;
      a++;
      number += " ";
   }
   number += "\n";
   }
   console.log(number);
 ```
  output:
   ```
      1
     2 3
    4 5 6
   7 8 9 10
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

   ```javascript
   "use strict";
   let string = "";
   for (let i = 1;i<=5;i++) {
   for (let j=5;j>i;j--) {
      string += " ";
   }
   for (let k=0;k<i*2-1;k++) {
      string += "*";
   }
   string += "\n";
   }
   for (let i=1;i<=5-1;i++) {
   for (let j=0;j<i;j++) {
      string += " ";
   }
   for (let k=(5-i)*2-1;k>0;k--) {
      string += "*";
   }
   string += "\n";
   }
   console.log(string);
 ```

 output:
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

### 20. Explain following terms
### a. console.log
### b. console.dir
### c. console.count
### d. console.table
### e. console.time/timeLog/timeEnd
### f. console.trace
### g. console.group/groupEnd
### h. console.assert

**console.log() :**

  The console.log() method writes a message to the console.

  The console is useful for testing purposes.

  The console.log() method writes a message to the console for debugging.

  ```javascript
  "use strict";
  //console.log
   let x = { property: 1, prop1: 2, method: function(){}};
   console.log(x);              //{property: 1, prop1: 2, method: ƒ}
   console.log("hello world");  //hello world
   //printing object
   let obj={};
   console.log(obj);            //{}
   console.log("object="+obj);  //object=[object Object]
   console.log(`${obj}`);       //[object Object]
  ```

 **console.dir() :** 

   If you want to take a look at all object’s properties and methods, you can print it out directly into the console using console.dir method.

  ```javascript
   "use strict";
    x = { property: 1, prop1: 2, method: function(){}};
    console.dir(x);
    console.dir("hello");  //hello
  ```
  output:
  ```
   Object
   method: ƒ ()
   prop1: 2
   property: 1
   [[Prototype]]: Object
   hello
  ```

**console.count() :**  

  Writes to the console the number of times that particular console.count() is called.

  You can add a label that will be included in the console view. By default the label "default" will be added.

 ```javascript
   "use strict";
   console.count();       //default: 1
   console.count("a");    //a: 1  
   console.count("b");    //b:1
   console.count("a");    //a:2
   console.count("a");    //a:3
   console.count();       //default:2
   console.count();       //default:3
   console.count();       //default:4
   console.count("b");    //b:2
   //console.countReset reset the count
   console.countReset();  
  ```        
  output:
  ```
 default: 1
 a: 1
 b: 1
 a: 2
 a: 3
 default: 2
 default: 3
 default: 4
 b: 2
  ```

 **console.table() :**

The console.table() method writes a table in the console view.

The first parameter is required, and must be either an object, or an array, containing data to fill the table.

   ```javascript
   "use strict";
   console.table(["Audi", "Volvo", "Ford"]);
   ``` 
   output:

   | (index)  |        Value   |
   | ------   |     ---------- |
   |  0	     |       "Audi"   |
   |  1	     |     "Volvo"    |
   |  2	     |     "Ford"     |
   
**console.time/timeLog/timeEnd() :**  

The **console.time()** method starts a timer in the console view.

This method allows you to time certain operations in your code for testing purposes.

The **console.timeLog()** method logs the current value of a timer that was previously started by calling.

Use the **console.timeEnd()** method to end the timer and display the result in the console.view.

Use the label parameter to name the timer, then you are able to have many timers on the same page.

 ```javascript 
   "use strict";
   console.time("a");
   let arr=new Array(10000);
   for(let i=0;i<arr.length;i++){
         arr[i]=new Object();
   }
   console.timeLog("a");
   console.timeEnd("a");
 ```
 output:
 ```
 a: 9.716064453125 ms
 a: 9.984130859375 ms
 ```
**console.trace() :**

The console.trace() method displays a trace that show how the code ended up at a certain point.

```javascript
"use strict";
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

output:
```
console.trace
bar @ VM1871:3
foo @ VM1871:5
(anonymous) @ VM1871:8
```

**console.group/groupEnd() :**

The console.group() method indicates the start of a message group.

All messages will from now on be written inside this group.

```javascript
"use strict";
console.log("Hello world!");
console.group();
console.log("Hello again, this time inside a group!");
console.log("hello world");
console.groupEnd();
console.log("and we are back.");
```
output:
```
Hello world!
console.group
   Hello again, this time inside a group!
   hello world
and we are back.
```
**console.assert() :**

The console.assert() method writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

```javascript
"use strict";
//console.assert()
console.log("print even number");
const errorMsg = 'this is not even number';
for (let number = 2; number <= 5; number++) {
    console.log(number+' is even number ');
    console.assert(number % 2 === 0, {number,errorMsg});
}
```
output:

```
print even number
2 is even number 
3 is even number 
Assertion failed: {number: 3, errorMsg: "this is not even number"}
4 is even number 
5 is even number 
Assertion failed: {number: 5, errorMsg: "this is not even number"}
```