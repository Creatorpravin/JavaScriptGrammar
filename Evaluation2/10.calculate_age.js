"use strict";
//give the input value
const birth_year = 1990;
//convert input value to string
const convertToString = birth_year + "" ;
//check if type of value is number or not 
if(typeof birth_year === "number"){
    if(convertToString.indexOf(".") === -1 ){
        if(birth_year > 0){
            let year = new Date();
            let current_year = year.getFullYear();
            let age = current_year - birth_year;
            console.log(age);
        }else{
            console.log("The negative value not accepted");
        }
    }else{
        console.log("The float value not accepted");
    }
}else{
    console.log("The string value not accepted");
}
