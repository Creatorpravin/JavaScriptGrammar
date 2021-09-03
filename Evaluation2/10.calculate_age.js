"use strict";
var birth_year = 1990;
var type=typeof birth_year;
var convertToString = birth_year + "" ;
if(type === "number" && convertToString.indexOf(".") === -1 ){
var year = new Date();
var current_year = year.getFullYear();
var age = current_year - birth_year;
console.log(age);
}else{
    console.log("This value not accepted");
}
