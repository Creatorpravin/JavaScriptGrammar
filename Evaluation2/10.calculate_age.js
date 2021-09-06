"use strict";
//give the input value
var birth_year = 1990;
//get the type of input value and store variable
var type = typeof birth_year;
//convert input value to string
var convertToString = birth_year + "" ;
//check if type of value is number or not 
if(type === "number" && convertToString.indexOf(".") === -1 ){
    var year = new Date();
    var current_year = year.getFullYear();
    var age = current_year - birth_year;
    console.log(age);
}else{
    console.log("This value not accepted");
}
