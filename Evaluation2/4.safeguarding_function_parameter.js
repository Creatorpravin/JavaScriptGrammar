"use strict";
var array = [];
var f = function(){return "This is function";}
myfunction(array);     //pass array instead of function
function myfunction(func){     
    (typeof func == "function")?console.log(func()):console.log("This is not function");
}    