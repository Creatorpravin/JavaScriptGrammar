"use strict";
let total = 0;
//named function
function sum(x,y){
    total = x + y;
    console.log(total);
} 
//assigning functions to variable
let multiply = function(x,y){
    total = x * y;
    console.log(total);
}
sum(10,20);
multiply(10,20);

