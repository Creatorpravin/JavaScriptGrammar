"use strict";
let array = [];
let f = function(){return "This is function";}
function myFunction(func){     
    (typeof func == "function")?console.log(func()):console.log("This is not function");
}
myFunction(array);     //pass array instead of function    