"use strict";
////give input range for find prime number
var start = 1;
var end = 50;
//get the type of input value and store variable
var start_type = typeof start;
var end_type = typeof end;
//convert input value to string
var startConvertToString = start + "" ;
var endConvertToString = end + "" ;
// check if type of value is number or not 
if(start_type === "number" && end_type === "number" && startConvertToString.indexOf(".") === -1 && endConvertToString.indexOf(".") === -1){
    var count = 0;
    for(let i = start ; i <= end ; i++ ){
        let numberToString = i + "" ;
        count += numberToString.split("0").length - 1;
    }
    console.log(count);
}
else{
    console.log("This value not accepted");
}

