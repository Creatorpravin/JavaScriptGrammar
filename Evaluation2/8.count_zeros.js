"use strict";
////give input range find number of zero
const start = 1;
const end = 50;
//get the type of input value and store variable
const start_type = typeof start;
const end_type = typeof end;
//convert input value to string
const startConvertToString = start + "" ;
const endConvertToString = end + "" ;
// check if type of value is number or not 
if(start_type === "number" && end_type === "number" ){
   if(startConvertToString.indexOf(".") === -1 && endConvertToString.indexOf(".") === -1){
        let count = 0;
        for(let i = start ; i <= end ; i++ ){
            let numberToString = i + "" ;
            count += numberToString.split("0").length - 1;
        }
        console.log(count);
    }
    else{
        console.log("The float value not accepted"); 
    }
}
else{
    console.log("The string value not accepted");
}

